import { Github, Instagram, Linkedin, Mail, MapPin, Phone, BookOpen, GraduationCap } from 'lucide-react';

const BiodataPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

        .bio-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #000000;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* BANNER UTAMA BREADCRUMB BIODATA */
        .bio-banner {
          background: #fffb00; /* Kuning Terang */
          border: 4px solid #000000;
          padding: 16px 24px;
          box-shadow: 4px 4px 0px #000000;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bio-banner h1 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .bio-banner p {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.8;
          letter-spacing: 1px;
        }

        /* BASE CARD NEOBRUTALISM */
        .card {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 5px 5px 0px #000000;
          padding: 24px;
          position: relative;
        }

        /* PROFILE CARD LAYOUT HORIZONTAL (MEMANJANG KE SAMPING) */
        .profile-horizontal {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px 24px;
        }

        /* AVATAR KOTAK HITAM HURUF KUNING */
        .avatar-box {
          width: 100px;
          height: 100px;
          border: 4px solid #000000;
          background: #000000;
          color: #fffb00;
          display: grid;
          place-items: center;
          font-size: 44px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }

        .profile-details h2 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
        }

        .profile-meta {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: #555555;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        /* CONTACT ROW */
        .contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          background: #ffffff;
          padding: 6px 12px;
          border: 2px solid #000000;
        }

        /* SOSMED FLOATING/RIGHT ALIGNED */
        .social-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-self: flex-start;
        }

        .social-group a {
          width: 38px;
          height: 38px;
          border: 2px solid #000000;
          display: grid;
          place-items: center;
          background: #ffffff;
          color: #000000;
          box-shadow: 2px 2px 0px #000000;
          transition: all 0.1s ease;
        }

        .social-group a:hover {
          background: #fffb00;
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        /* SUB BANNER SEKSI (Informasi Akademik, Projek, dll) */
        .section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          background: #99eebb; /* Hijau Pastel Khas Dashboard */
          color: #000000;
          padding: 6px 14px;
          border: 3px solid #000000;
          width: fit-content;
          margin-bottom: 16px;
        }

        /* GRID AKADEMIK 3 KOLOM MEMANJANG */
        .academic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .info-box {
          background: #ffffff;
          padding: 14px;
          border: 3px solid #000000;
        }

        .info-box span {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #666666;
          display: block;
          margin-bottom: 2px;
        }

        .info-box strong {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: #000000;
        }

        /* REPO BOX RETRO STYLE */
        .repo-container {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .repo-link {
          color: #000000;
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          border-bottom: 2px dashed #000000;
        }

        .repo-link:hover {
          background: #fffb00;
          border-bottom-style: solid;
        }

        /* RESPONSIVE LAYOUT */
        @media (max-width: 768px) {
          .profile-horizontal {
            flex-direction: column;
            text-align: center;
          }
          .contact-row {
            justify-content: center;
          }
          .academic-grid {
            grid-template-columns: 1fr;
          }
          .social-group {
            flex-direction: row;
            align-self: center;
            margin-top: 12px;
          }
        }
      `}</style>

      <div className="bio-page">
        {/* ATAS: BANNER UTAMA BIODATA */}
        <div className="bio-banner">
          <h1>◆ Biodata Mahasiswa</h1>
          <p>Profil Pembuat Website</p>
        </div>

        {/* TENGAH: PROFILE BLOCK (HORIZONTAL MEMANJANG KE SAMPING) */}
        <div className="card profile-horizontal">
          <div className="avatar-box">M</div>
          
          <div className="profile-details">
            <h2>Muhammad Azfa Rizanta</h2>
            <div className="profile-meta">NIM: 24090061 • D-4 Teknik Informatika</div>
            
            <div className="contact-row">
              <div className="contact-item"><Mail size={14} /> azfa@gmail.com</div>
              <div className="contact-item"><MapPin size={14} /> Tegal, Jawa Tengah</div>
              <div className="contact-item"><Phone size={14} /> 08xxxxxxxxxx</div>
            </div>
          </div>

          <div className="social-group">
            <a href="https://github.com/aspariz" target="_blank" rel="noreferrer" title="GitHub"><Github size={18} /></a>
            <a href="https://instagram.com/aspa_riz" target="_blank" rel="noreferrer" title="Instagram"><Instagram size={18} /></a>
          </div>
        </div>

        {/* BAWAH SEKSI 1: INFORMASI AKADEMIK */}
        <div className="card">
          <div className="section-title">
            <GraduationCap size={16} /> Informasi Akademik
          </div>

          <div className="academic-grid">
            <div className="info-box"><span>Nama Lengkap</span><strong>Muhammad Azfa Rizanta</strong></div>
            <div className="info-box"><span>NIM</span><strong style={{ fontFamily: 'DM Mono' }}>24090061</strong></div>
            <div className="info-box"><span>Program Studi</span><strong>D-4 Teknik Informatika</strong></div>
            <div className="info-box"><span>Fakultas</span><strong>Sekolah Vokasi</strong></div>
            <div className="info-box"><span>Angkatan</span><strong>2024</strong></div>
            <div className="info-box"><span>Status</span><strong style={{ color: '#2e7d32' }}>Aktif</strong></div>
          </div>
        </div>

        {/* BAWAH SEKSI 2: TENTANG PROJEK */}
        <div className="card">
          <div className="section-title">
            <BookOpen size={16} /> Tentang Projek
          </div>
          <p style={{ fontSize: '14px', color: '#000000', lineHeight: '1.6', fontWeight: '700', margin: 0 }}>
            Aplikasi EventHub berbasis web untuk mengelola, menstrukturkan, dan mempublikasikan kegiatan kampus secara digital. Dikembangkan sebagai bagian dari pemenuhan tugas praktik mahasiswa Teknik Informatika Politeknik Harapan Bersama.
          </p>
        </div>

        {/* BAWAH SEKSI 3: REPOSITORY GIT */}
        <div className="card">
          <div className="section-title">
            <Github size={16} /> Repository Git
          </div>
          <div className="repo-container">
            <Github size={18} />
            <a
              href="https://github.com/aspariz"
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              github.com/aspariz
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiodataPage;