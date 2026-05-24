import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, Calendar, MapPin, Users, Clock } from 'lucide-react';
import api from '../lib/api';
import { Event, CategoryEvent, Pembicara } from '../types';
import toast from 'react-hot-toast';

// Warna badge disesuaikan agar teks kontras tinggi di atas background putih/terang
const STATUS_COLORS: Record<string, string> = {
  upcoming: '#0055ff',  // Biru Elektrik
  ongoing: '#00cc66',   // Hijau Terang
  completed: '#555555', // Abu-abu gelap
  cancelled: '#ff2222', // Merah Terang
};

const STATUS_LABELS: Record<string, string> = {
  upcoming: 'Akan Datang',
  ongoing: 'Berlangsung',
  completed: 'Selesai',
  cancelled: 'Dibatalkan',
};

const defaultForm = {
  title: '', description: '', date: '', time: '', location: '',
  capacity: '', status: 'upcoming', imageUrl: '', categoryId: '', pembicaraId: '',
};

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<CategoryEvent[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<Event | null>(null);
  const [form, setForm] = useState(defaultForm);
  const [saving, setSaving] = useState(false);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [evRes, catRes, spkRes] = await Promise.all([
        api.get('/events'),
        api.get('/categories'),
        api.get('/pembicara'),
      ]);
      setEvents(evRes.data);
      setCategories(catRes.data);
      setPembicara(spkRes.data);
    } catch {
      toast.error('Gagal memuat data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  const openAdd = () => { setEditItem(null); setForm(defaultForm); setModal(true); };

  const openEdit = (ev: Event) => {
    setEditItem(ev);
    setForm({
      title: ev.title,
      description: ev.description || '',
      // Memastikan pemotongan ISO String aman jika format tanggal dari API valid
      date: ev.date ? ev.date.split('T')[0] : '',
      time: ev.time,
      location: ev.location,
      capacity: String(ev.capacity),
      status: ev.status,
      imageUrl: ev.imageUrl || '',
      categoryId: String(ev.categoryId),
      pembicaraId: String(ev.pembicaraId),
    });
    setModal(true);
  };

  const closeModal = () => { setModal(false); setEditItem(null); };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    // Rekonstruksi data payload agar tipe datanya sesuai dengan kebutuhan database (integer/number)
    const payload = {
      ...form,
      capacity: Number(form.capacity),
      categoryId: Number(form.categoryId),
      pembicaraId: Number(form.pembicaraId),
    };

    try {
      if (editItem) {
        await api.put(`/events/${editItem.id}`, payload);
        toast.success('Event diperbarui');
      } else {
        await api.post('/events', payload);
        toast.success('Event ditambahkan');
      }
      closeModal();
      fetchAll();
    } catch {
      toast.error('Gagal menyimpan data');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`Hapus "${title}"?`)) return;
    try {
      await api.delete(`/events/${id}`);
      toast.success('Dihapus');
      fetchAll();
    } catch {
      toast.error('Gagal menghapus');
    }
  };

  return (
    <>
      <style>{`
        /* ── Page Layout ── */
        .page {
          width: 100%;
          color: #000000;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .header h1 {
          font-size: 28px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        /* ── Neobrutalism Button (Kuning dengan Bayangan Kaku) ── */
        .btn {
          background: #fffb00; /* Kuning Terang */
          border: 4px solid #000000;
          padding: 10px 20px;
          color: #000000;
          font-weight: 900;
          font-size: 14px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 4px 4px 0px #000000;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000000;
        }

        .btn:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #000000;
        }

        /* ── Grid & Cards (Siku-siku Tajam, Border Tebal) ── */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .card {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          overflow: hidden;
          transition: transform 0.1s, box-shadow 0.1s;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translate(-3px, -3px);
          box-shadow: 9px 9px 0px #000000;
        }

        .img {
          height: 160px;
          background: #e0e0e0;
          background-size: cover;
          background-position: center;
          border-bottom: 4px solid #000000;
        }

        .content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .title {
          font-size: 16px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .meta {
          font-size: 12px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #444444;
        }

        .meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── Status Badge ── */
        .badge {
          align-self: flex-start;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 2px solid #000000;
          box-shadow: 2px 2px 0px #000000;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 12px;
          border-top: 2px dashed #000000;
        }

        .capacity-info {
          font-size: 13px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        /* ── Icon Action Buttons ── */
        .icon-btn {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 6px;
          cursor: pointer;
          box-shadow: 2px 2px 0px #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn:hover {
          background: #fffb00; /* Kuning saat hover edit */
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        .icon-btn.delete-btn:hover {
          background: #ff2222; /* Merah saat hover hapus */
          color: #ffffff;
        }

        /* ── Neobrutalism Modal Layout ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
          padding: 16px;
        }

        .modal {
          background: #ffffff;
          padding: 24px;
          border: 4px solid #000000;
          box-shadow: 10px 10px 0px #000000;
          width: 100%;
          max-width: 600px;
          color: #000000;
        }

        .modal h2 {
          font-size: 22px;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 20px;
          border-bottom: 4px solid #000000;
          padding-bottom: 8px;
        }

        /* ── Input & Select Brutalism Style ── */
        .input {
          width: 100%;
          margin-bottom: 14px;
          padding: 12px;
          border: 3px solid #000000;
          background: #ffffff;
          color: #000000;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 3px 3px 0px #000000;
        }

        .input:focus {
          outline: none;
          background: #fffb00; /* Efek fokus warna kuning mencolok */
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .btn-secondary {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 10px 20px;
          color: #000000;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-secondary:hover {
          background: #f0f0f0;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }

        .btn-primary {
          background: #fffb00;
          border: 3px solid #000000;
          padding: 10px 24px;
          color: #000000;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-primary:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }
      `}</style>

      <div className="page">

        {/* HEADER */}
        <div className="header">
          <h1>Kelola Event</h1>
          <button className="btn" onClick={openAdd}>
            <Plus size={18} strokeWidth={3} /> Tambah Event
          </button>
        </div>

        {/* CONTENT */}
        {loading ? (
          <p style={{ fontWeight: 800, textTransform: 'uppercase' }}>Memuat data...</p>
        ) : (
          <div className="grid">
            {events.map(ev => (
              <div key={ev.id} className="card">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${ev.imageUrl || 'https://picsum.photos/400'})` }}
                />

                <div className="content">
                  <div className="title">{ev.title}</div>

                  <div className="meta">
                    <span><Calendar size={14} /> {ev.date ? new Date(ev.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}</span>
                    <span><Clock size={14} /> {ev.time} WIB</span>
                    <span><MapPin size={14} /> {ev.location}</span>
                  </div>

                  <div
                    className="badge"
                    style={{
                      background: STATUS_COLORS[ev.status] + '22',
                      color: STATUS_COLORS[ev.status]
                    }}
                  >
                    {STATUS_LABELS[ev.status] || ev.status}
                  </div>

                  <div className="footer">
                    <span className="capacity-info">
                      <Users size={14} /> Kuota: {ev.capacity || '∞'}
                    </span>

                    <div className="actions">
                      <button className="icon-btn" onClick={() => openEdit(ev)} title="Edit">
                        <Pencil size={14} strokeWidth={2.5} />
                      </button>
                      <button className="icon-btn delete-btn" onClick={() => handleDelete(ev.id, ev.title)} title="Hapus">
                        <Trash2 size={14} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODAL FORM */}
        {modal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>{editItem ? 'Edit' : 'Buat'} Event Baru</h2>

              <form onSubmit={handleSave}>
                <input className="input" placeholder="Judul Event" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />

                <div className="row">
                  <input type="date" className="input" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
                  <input type="time" className="input" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
                </div>

                <input className="input" placeholder="Lokasi Pelaksanaan" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />

                <div className="row">
                  <input type="number" className="input" placeholder="Maksimal Kuota" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} required />
                  <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} required>
                    <option value="upcoming">Akan Datang</option>
                    <option value="ongoing">Berlangsung</option>
                    <option value="completed">Selesai</option>
                    <option value="cancelled">Dibatalkan</option>
                  </select>
                </div>

                <div className="row">
                  <select className="input" value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })} required>
                    <option value="" disabled>Pilih Kategori</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>

                  <select className="input" value={form.pembicaraId} onChange={(e) => setForm({ ...form, pembicaraId: e.target.value })} required>
                    <option value="" disabled>Pilih Pembicara</option>
                    {pembicara.map(spk => (
                      <option key={spk.id} value={spk.id}>{spk.name}</option>
                    ))}
                  </select>
                </div>

                <input className="input" placeholder="URL Gambar Sampul (Opsional)" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />

                <textarea className="input" placeholder="Deskripsi Lengkap Acara" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 14 }}>
                  <button type="button" className="btn-secondary" onClick={closeModal}>Batal</button>
                  <button type="submit" className="btn-primary">{saving ? 'Proses...' : 'Simpan'}</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default EventsPage;