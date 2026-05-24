import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, Folder, Tag } from 'lucide-react';
import api from '../lib/api';
import { CategoryEvent } from '../types';
import toast from 'react-hot-toast';

// Variasi warna background pastel neobrutalism (diambil dari warna card dashboard)
const CARD_BG_COLORS = [
  '#fff5f0', // Soft Orange/Cream
  '#edf2ff', // Soft Blue
  '#fff0f5', // Soft Pink
  '#f4fff7', // Soft Green
];

const CategoriesPage = () => {
  const [categories, setCategories] = useState<CategoryEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<CategoryEvent | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await api.get('/categories');
      setCategories(res.data);
    } catch {
      toast.error('Gagal memuat data kategori');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openAdd = () => {
    setEditItem(null);
    setName('');
    setDescription('');
    setModal(true);
  };

  const openEdit = (cat: CategoryEvent) => {
    setEditItem(cat);
    setName(cat.name);
    setDescription(cat.description || '');
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setEditItem(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { name, description };
      if (editItem) {
        await api.put(`/categories/${editItem.id}`, payload);
        toast.success('Kategori diperbarui');
      } else {
        await api.post('/categories', payload);
        toast.success('Kategori ditambahkan');
      }
      closeModal();
      fetchCategories();
    } catch {
      toast.error('Gagal menyimpan kategori');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number, catName: string) => {
    if (!confirm(`Hapus kategori "${catName}"?`)) return;
    try {
      await api.delete(`/categories/${id}`);
      toast.success('Kategori dihapus');
      fetchCategories();
    } catch {
      toast.error('Gagal menghapus kategori');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=DM+Mono:wght@700&display=swap');

        .cat-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #000000;
          width: 100%;
        }

        /* BANNER ATAS (Meniru banner utama dashboard) */
        .cat-banner {
          background: #fffb00;
          border: 4px solid #000000;
          padding: 16px 24px;
          box-shadow: 6px 6px 0px #000000;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cat-banner-text h1 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .cat-banner-text p {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 4px 0 0 0;
          opacity: 0.8;
        }

        /* TOMBOL TAMBAH NEOBRUTALISM */
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

        /* BENTO GRID */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        /* CARD STYLE DENGAN SUDUT TERPOTONG (Sama persis seperti card dashboard) */
        .cat-card {
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          position: relative;
          background: #ffffff;
          /* Efek miring potong sudut kanan atas */
          clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
        }

        .cat-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: #000000;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }

        .cat-card-main {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* BADGE SINKRON SAMA AKADEMIK BADGE */
        .cat-badge {
          background: #99eebb; /* Hijau Pastel */
          border: 2px solid #000000;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 8px;
        }

        .cat-card h2 {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          color: #000000;
        }

        .cat-card p {
          font-size: 13px;
          font-weight: 700;
          color: #444444;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER CARD UNTUK AKSI & TOTAL EVENT */
        .cat-card-footer {
          margin-top: 20px;
          padding-top: 14px;
          border-top: 4px dashed #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cat-count {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          background: #ffffff;
          border: 2px solid #000000;
          padding: 2px 8px;
          box-shadow: 2px 2px 0px #000000;
        }

        .cat-actions {
          display: flex;
          gap: 8px;
        }

        /* TOMBOL UTK EDIT & HAPUS */
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

        /* MODAL NEOBRUTALISM */
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
          max-width: 460px;
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

        .form-input {
          width: 100%;
          padding: 12px;
          border: 3px solid #000000;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 16px;
          box-shadow: 3px 3px 0px #000000;
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
          margin-top: 8px;
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

      <div className="cat-page">
        {/* BANNER UTAMA */}
        <div className="cat-banner">
          <div className="cat-banner-text">
            <h1>◆ Kategori Event</h1>
            <p>Kelola Kategori Event Management System</p>
          </div>
          <button className="btn-add" onClick={openAdd}>
            <Plus size={16} strokeWidth={3} /> Tambah
          </button>
        </div>

        {/* CONTAINER UTAMA */}
        {loading ? (
          <p style={{ fontWeight: 800, textTransform: 'uppercase' }}>Memuat data...</p>
        ) : (
          <div className="cat-grid">
            {categories.map((cat, index) => {
              // Distribusi warna background kotak agar estetik berselang-seling
              const bg = CARD_BG_COLORS[index % CARD_BG_COLORS.length];

              return (
                <div key={cat.id} className="cat-card" style={{ background: bg }}>
                  <div className="cat-card-main">
                    <div className="cat-badge">
                      <Folder size={10} style={{ marginRight: '4px', display: 'inline' }} /> Kategori
                    </div>
                    <h2>{cat.name}</h2>
                    <p>{cat.description || 'Tidak ada deskripsi singkat untuk kategori ini.'}</p>
                  </div>

                  <div className="cat-card-footer">
                    {/* Mengambil relasi hitungan event bawaan dari backend */}
                    <div className="cat-count">
                      <Tag size={12} style={{ marginRight: '4px', display: 'inline' }} />
                      {(cat as any)._count?.events || 0} Event
                    </div>
                    <div className="cat-actions">
                      <button className="action-btn" onClick={() => openEdit(cat)} title="Edit Kategori">
                        <Pencil size={14} strokeWidth={2.5} />
                      </button>
                      <button className="action-btn del" onClick={() => handleDelete(cat.id, cat.name)} title="Hapus Kategori">
                        <Trash2 size={14} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODAL FORM TAMBAH / EDIT */}
        {modal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3>{editItem ? 'Edit' : 'Tambah'} Kategori</h3>
              <form onSubmit={handleSave}>
                <input
                  className="form-input"
                  placeholder="Nama Kategori (Contoh: Workshop, Lomba)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <textarea
                  className="form-input"
                  placeholder="Tulis deskripsi kategori di sini..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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

export default CategoriesPage;