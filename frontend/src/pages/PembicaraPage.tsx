import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Mic2, Mail, Phone, Award, Layers, Code, Brain, Shield, Briefcase, GraduationCap, Globe } from 'lucide-react';
import api from '../lib/api';
import { Pembicara } from '../types';
import toast from 'react-hot-toast';

const defaultForm = { name: '', title: '', expertise: '', email: '', phone: '', bio: '', photoUrl: '' };

// Variasi warna background pastel neobrutalism untuk card pembicara
const CARD_BG_COLORS = [
  '#fff5f0', // Soft Orange/Cream
  '#edf2ff', // Soft Blue
  '#fff0f5', // Soft Pink
  '#f4fff7', // Soft Green
];

const PembicaraPage = () => {
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<Pembicara | null>(null);
  const [form, setForm] = useState(defaultForm);
  const [saving, setSaving] = useState(false);

  const fetchPembicara = async () => {
    setLoading(true);
    try {
      const res = await api.get('/pembicara');
      setPembicara(res.data);
    } catch {
      toast.error('Gagal memuat data pembicara');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPembicara(); }, []);

  const openAdd = () => { setEditItem(null); setForm(defaultForm); setModal(true); };
  const openEdit = (p: Pembicara) => {
    setEditItem(p);
    setForm({ name: p.name, title: p.title, expertise: p.expertise, email: p.email || '', phone: p.phone || '', bio: p.bio || '', photoUrl: p.photoUrl || '' });
    setModal(true);
  };
  const closeModal = () => { setModal(false); setEditItem(null); };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editItem) {
        await api.put(`/pembicara/${editItem.id}`, form);
        toast.success('Pembicara berhasil diperbarui');
      } else {
        await api.post('/pembicara', form);
        toast.success('Pembicara berhasil ditambahkan');
      }
      closeModal();
      fetchPembicara();
    } catch {
      toast.error('Gagal menyimpan pembicara');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Hapus pembicara "${name}"?`)) return;
    try {
      await api.delete(`/pembicara/${id}`);
      toast.success('Pembicara berhasil dihapus');
      fetchPembicara();
    } catch {
      toast.error('Gagal menghapus pembicara');
    }
  };

  // Memilih ikon pembicara neobrutalism kaku tanpa efek pendaran glow dark mode
  const getSpeakerIcon = (title: string = '', expertise: string = '') => {
    const text = (title + ' ' + expertise).toLowerCase();
    if (text.includes('code') || text.includes('developer') || text.includes('web') || text.includes('software')) {
      return <Code size={28} style={{ color: '#000000' }} />;
    }
    if (text.includes('ai') || text.includes('intelligence') || text.includes('machine') || text.includes('data')) {
      return <Brain size={28} style={{ color: '#000000' }} />;
    }
    if (text.includes('security') || text.includes('cyber') || text.includes('network')) {
      return <Shield size={28} style={{ color: '#000000' }} />;
    }
    if (text.includes('dosen') || text.includes('researcher') || text.includes('m.kom') || text.includes('ph.d')) {
      return <GraduationCap size={28} style={{ color: '#000000' }} />;
    }
    if (text.includes('ceo') || text.includes('founder') || text.includes('manager') || text.includes('owner')) {
      return <Briefcase size={28} style={{ color: '#000000' }} />;
    }
    return <Globe size={28} style={{ color: '#000000' }} />;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=DM+Mono:wght@700&display=swap');

        .spk-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #000000;
          width: 100%;
        }

        /* BANNER ATAS (Identik dengan Dashboard & Kategori) */
        .spk-banner {
          background: #fffb00;
          border: 4px solid #000000;
          padding: 16px 24px;
          box-shadow: 6px 6px 0px #000000;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spk-banner-text h1 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .spk-banner-text p {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 4px 0 0 0;
          opacity: 0.8;
        }

        /* TOMBOL TAMBAH */
        .btn-add {
          background: #ffffff;
          border: 4px solid #000000;
          padding: 10px 18px;
          color: #000000;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 4px 4px 0px #000000;
          transition: all 0.1s ease;
        }

        .btn-add:hover {
          background: #000000;
          color: #fffb00;
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000000;
        }

        .btn-add:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #000000;
        }

        /* GRID BENTO */
        .spk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        /* CARD STYLE DENGAN SUDUT TERPOTONG (Clipped Corner) */
        .spk-card {
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          background: #ffffff;
          clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
        }

        .spk-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: #000000;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }

        /* AVATAR BOX BLOCKY */
        .spk-avatar-block {
          width: 70px;
          height: 70px;
          border: 3px solid #000000;
          background: #ffffff;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          box-shadow: 3px 3px 0px #000000;
          overflow: hidden;
        }

        .spk-avatar-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .spk-card h3 {
          font-size: 19px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 4px 0;
          color: #000000;
        }

        .spk-title {
          font-size: 12px;
          font-weight: 700;
          color: #555555;
          text-transform: uppercase;
          margin: 0 0 12px 0;
          font-family: 'DM Mono', monospace;
        }

        /* BADGE KEAHLIAN */
        .spk-expertise {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          background: #ffffff;
          border: 2px solid #000000;
          padding: 4px 10px;
          width: fit-content;
          margin-bottom: 14px;
          box-shadow: 2px 2px 0px #000000;
        }

        /* UTILITY CONTACTS */
        .spk-contacts {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 10px;
          border-top: 2px dashed #000000;
        }

        .spk-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #222222;
        }

        /* CARD FOOTER */
        .spk-card-footer {
          margin-top: 18px;
          padding-top: 12px;
          border-top: 4px solid #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spk-badge-event {
          background: #99eebb; /* Hijau Pastel */
          border: 2px solid #000000;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .spk-actions {
          display: flex;
          gap: 6px;
        }

        .action-btn {
          background: #ffffff;
          border: 2px solid #000000;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px #000000;
          transition: all 0.05s ease;
        }

        .action-btn:hover {
          background: #fffb00;
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        .action-btn.del:hover {
          background: #ffcdd2;
        }

        /* MODAL NEOBRUTALISM LIGHT-MODE */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          padding: 20px;
        }

        .modal-box {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          width: 100%;
          max-width: 540px;
          padding: 24px;
        }

        .modal-box h3 {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 20px 0;
          border-bottom: 4px solid #000000;
          padding-bottom: 8px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          border: 3px solid #000000;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 2px 2px 0px #000000;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          background: #fffb00;
        }

        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 14px;
        }

        .btn-cancel {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 8px 16px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-submit {
          background: #fffb00;
          border: 3px solid #000000;
          padding: 8px 20px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-submit:hover, .btn-cancel:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }
      `}</style>

      <div className="spk-page">
        {/* BANNER UTAMA */}
        <div className="spk-banner">
          <div className="spk-banner-text">
            <h1>◆ Pembicara Event</h1>
            <p>Kelola Data Ahli & Pembicara Kegiatan</p>
          </div>
          <button className="btn-add" onClick={openAdd}>
            <Plus size={16} strokeWidth={3} /> Tambah
          </button>
        </div>

        {/* UTAMA GRID */}
        {loading ? (
          <p style={{ fontWeight: 800, textTransform: 'uppercase' }}>Memuat data pembicara...</p>
        ) : (
          <div className="spk-grid">
            {pembicara.length === 0 ? (
              <div style={{ gridColumn: '1/-1', border: '3px dashed #000000', padding: '40px', textAlign: 'center', fontWeight: '800', textTransform: 'uppercase' }}>
                <Mic2 size={32} style={{ marginBottom: '8px' }} />
                <p>Belum ada data pembicara.</p>
              </div>
            ) : (
              pembicara.map((p, index) => {
                const bg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];

                return (
                  <div key={p.id} className="spk-card" style={{ background: bg }}>
                    <div>
                      {/* Avatar Image / Retro Icon Block */}
                      <div className="spk-avatar-block">
                        {p.photoUrl ? (
                          <img src={p.photoUrl} alt={p.name} />
                        ) : (
                          getSpeakerIcon(p.title, p.expertise)
                        )}
                      </div>

                      <h3>{p.name}</h3>
                      <div className="spk-title">{p.title}</div>
                      
                      <div className="spk-expertise">
                        <Award size={12} style={{ marginRight: '4px' }} /> {p.expertise}
                      </div>

                      {/* Kontak Email & HP */}
                      {(p.email || p.phone) && (
                        <div className="spk-contacts">
                          {p.email && (
                            <div className="spk-contact-item">
                              <Mail size={12} /> <span>{p.email}</span>
                            </div>
                          )}
                          {p.phone && (
                            <div className="spk-contact-item">
                              <Phone size={12} /> <span>{p.phone}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer Kartu */}
                    <div className="spk-card-footer">
                      <div className="spk-badge-event">
                        {p._count?.events || 0} Event
                      </div>
                      <div className="spk-actions">
                        <button className="action-btn" onClick={() => openEdit(p)} title="Edit">
                          <Pencil size={13} strokeWidth={2.5} />
                        </button>
                        <button className="action-btn del" onClick={() => handleDelete(p.id, p.name)} title="Hapus">
                          <Trash2 size={13} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* MODAL FORM */}
        {modal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3>{editItem ? 'Edit Pembicara' : 'Tambah Pembicara'}</h3>
              <form onSubmit={handleSave}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nama Lengkap *</label>
                    <input type="text" className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Contoh: Dr. Eko" required />
                  </div>
                  <div className="form-group">
                    <label>Jabatan / Gelar *</label>
                    <input type="text" className="form-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Contoh: CTO, Dosen" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Keahlian / Bidang *</label>
                  <input type="text" className="form-input" value={form.expertise} onChange={(e) => setForm({ ...form, expertise: e.target.value })} placeholder="Contoh: Cybersecurity, Web Dev" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@domain.com" />
                  </div>
                  <div className="form-group">
                    <label>Telepon</label>
                    <input type="text" className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08xxxxxxxxxx" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Foto URL</label>
                  <input type="url" className="form-input" value={form.photoUrl} onChange={(e) => setForm({ ...form, photoUrl: e.target.value })} placeholder="https://..." />
                </div>

                <div className="form-group">
                  <label>Biografi Singkat</label>
                  <textarea className="form-input" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} placeholder="Deskripsi ringkas pembicara..." rows={3} />
                </div>

                <div className="modal-buttons">
                  <button type="button" className="btn-cancel" onClick={closeModal}>Batal</button>
                  <button type="submit" className="btn-submit" disabled={saving}>
                    {saving ? 'Menyimpan...' : 'Simpan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PembicaraPage;