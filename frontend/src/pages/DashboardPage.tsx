import { useEffect, useState } from 'react';
import { Calendar, Tags, Mic2, TrendingUp } from 'lucide-react';
import api from '../lib/api';

interface Event {
  id: number;
  title: string;
  date: string;
  status: string;
}

interface Stats {
  events: number;
  categories: number;
  pembicara: number;
  upcoming: number;
}

const DashboardPage = () => {
  const [stats, setStats] = useState<Stats>({
    events: 0,
    categories: 0,
    pembicara: 0,
    upcoming: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [evRes, catRes, spkRes] = await Promise.all([
          api.get('/events'),
          api.get('/categories'),
          api.get('/pembicara'),
        ]);

        const upcoming = evRes.data.filter(
          (e: Event) => e.status === 'upcoming'
        ).length;

        setStats({
          events: evRes.data.length,
          categories: catRes.data.length,
          pembicara: spkRes.data.length,
          upcoming,
        });
      } catch (error) {
        console.error("Gagal memuat data dashboard", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@700;900&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

        /* Polka Dot Grid Background Khas Neobrutalism */
        .dash-container {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #f4f1ea;
          background-image: radial-gradient(#000000 1px, transparent 1px);
          background-size: 16px 16px;
          min-height: 100%;
          padding: 30px;
          color: #000000;
        }

        /* ── HEADER BANNER UTAMA (KUNING) ── */
        .neo-banner {
          background: #fffb00; /* Kuning Terang */
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          margin-bottom: 35px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .banner-rhombus {
          width: 24px;
          height: 24px;
          background: #000000;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .banner-text h1 {
          font-size: 32px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          color: #000000;
          line-height: 1;
          margin-bottom: 4px;
        }

        .banner-text p {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        /* ── GRID METRIK HORIZONTAL ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── CARD DENGAN POTONGAN SUDUT RETRO (CLIPPED CORNER) ── */
        .neo-stat-card {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 160px;
          
          /* Efek Potong Sudut Kanan Atas menggunakan Clip-Path */
          clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%);
        }

        /* Variasi Warna Latar Belakang Lembut Sesuai Gambar */
        .card-events { background: #fffcf4; }
        .card-categories { background: #f0f3ff; }
        .card-speakers { background: #fff2fc; }
        .card-upcoming { background: #f1fdf5; }

        /* Kotak Ikon Kecil di Sisi Atas */
        .card-icon-box {
          width: 40px;
          height: 40px;
          border: 3px solid #000000;
          display: grid;
          place-items: center;
          color: #ffffff;
          box-shadow: 2px 2px 0px #000000;
        }

        /* Data Nilai Utama */
        .card-value-box {
          margin-top: auto;
          z-index: 2;
        }

        .card-number {
          font-size: 48px;
          font-weight: 900;
          color: #000000;
          line-height: 1;
        }

        .card-title {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          opacity: 0.7;
          margin-top: 4px;
          letter-spacing: 0.5px;
        }

        /* ── DEKORASI IKON BESAR TRANSPARAN DI BELAKANG ── */
        .card-bg-icon {
          position: absolute;
          right: -10px;
          bottom: -10px;
          opacity: 0.15; /* Efek transparan samar */
          color: #000000;
          pointer-events: none;
          z-index: 1;
        }

        /* Kustomisasi kliping sudut border tebal agar menyatu */
        .neo-stat-card::before {
          content: "";
          position: absolute;
          top: -4px; right: -4px;
          width: 38px; height: 38px;
          background: #000000;
          transform: rotate(45deg);
          z-index: 3;
          pointer-events: none;
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .neo-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <div className="dash-container">
        {/* BANNER UTAMA */}
        <div className="neo-banner">
          <div className="banner-rhombus"></div>
          <div className="banner-text">
            <h1>Dashboard</h1>
            <p>Selamat Datang di Event Management System</p>
          </div>
        </div>

        {/* METRIK STATISTIK HORIZONTAL */}
        <div className="stats-grid">
          
          {/* CARD 1: TOTAL EVENT */}
          <div className="neo-stat-card card-events">
            <div className="card-icon-box" style={{ background: '#ff5500' }}>
              <Calendar size={20} />
            </div>
            <div className="card-value-box">
              <div className="card-number">{loading ? '...' : stats.events}</div>
              <div className="card-title">Total Event</div>
            </div>
            <Calendar size={110} className="card-bg-icon" />
          </div>

          {/* CARD 2: KATEGORI */}
          <div className="neo-stat-card card-categories">
            <div className="card-icon-box" style={{ background: '#0055ff' }}>
              <Tags size={20} />
            </div>
            <div className="card-value-box">
              <div className="card-number">{loading ? '...' : stats.categories}</div>
              <div className="card-title">Kategori</div>
            </div>
            <Tags size={110} className="card-bg-icon" />
          </div>

          {/* CARD 3: PEMBICARA */}
          <div className="neo-stat-card card-speakers">
            <div className="card-icon-box" style={{ background: '#cc00cc' }}>
              <Mic2 size={20} />
            </div>
            <div className="card-value-box">
              <div className="card-number">{loading ? '...' : stats.pembicara}</div>
              <div className="card-title">Pembicara</div>
            </div>
            <Mic2 size={110} className="card-bg-icon" />
          </div>

          {/* CARD 4: UPCOMING */}
          <div className="neo-stat-card card-upcoming">
            <div className="card-icon-box" style={{ background: '#00aa33' }}>
              <TrendingUp size={20} />
            </div>
            <div className="card-value-box">
              <div className="card-number">{loading ? '...' : stats.upcoming}</div>
              <div className="card-title">Upcoming</div>
            </div>
            <Calendar size={110} className="card-bg-icon" />
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardPage;