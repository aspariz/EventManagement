import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Calendar, Eye, EyeOff, Lock, Hash, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(nim, password);
      toast.success('Login berhasil! Selamat datang.');
      navigate('/dashboard');
    } catch (err: unknown) {
      toast.error((err as Error).message || 'Login gagal');
    }
  };

  return (
    <div className="neobrutal-universe">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

        .neobrutal-universe {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F4F2EC; /* Background dot-grid style match */
          background-image: radial-gradient(#000000 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          font-family: 'Space Grotesk', sans-serif;
          padding: 24px;
        }

        /* ── CARD PANEL NEOBRUTALISM (MATCH SIDEBAR & DASHBOARD) ── */
        .neobrutal-panel {
          width: 100%;
          max-width: 450px;
          background: #FFFFFF;
          border: 4px solid #000000;
          box-shadow: 10px 10px 0px #000000;
          padding: 40px 32px;
          position: relative;
        }

        /* ── Header Branding Atas ── */
        .panel-header-box {
          background: #FFE600; /* Kuning Khas Eventhub */
          border: 4px solid #000000;
          box-shadow: 4px 4px 0px #000000;
          padding: 16px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .neon-logo-square {
          width: 48px;
          height: 48px;
          background: #FFFFFF;
          border: 3px solid #000000;
          display: grid;
          place-items: center;
          color: #000000;
        }

        .header-text-group h1 {
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          margin: 0;
          line-height: 1.1;
        }

        .header-text-group p {
          font-size: 11px;
          font-weight: 500;
          color: #000000;
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        /* ── Form Constraints ── */
        .neobrutal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          letter-spacing: 0.5px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper input {
          width: 100%;
          background: #FFFFFF;
          border: 3px solid #000000;
          padding: 14px 16px 14px 48px;
          color: #000000;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
        }

        .input-wrapper input:focus {
          outline: none;
          background: #FFE600; /* Berubah jadi kuning saat aktif */
          box-shadow: 4px 4px 0px #000000;
          transform: translate(-2px, -2px);
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: #000000;
          pointer-events: none;
        }

        .eye-toggle-btn {
          position: absolute;
          right: 14px;
          background: #FFFFFF;
          border: 2px solid #000000;
          color: #000000;
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 4px;
          transition: transform 0.1s;
        }

        .eye-toggle-btn:active {
          transform: translate(1px, 1px);
        }

        /* ── TOMBOL MASUK KUNING/HITAM TEBAL (MATCH TOMBOL KELUAR) ── */
        .submit-neobrutal-btn {
          margin-top: 8px;
          width: 100%;
          padding: 16px;
          background: #FFE600;
          color: #000000;
          border: 4px solid #000000;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 5px 5px 0px #000000;
          transition: all 0.15s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .submit-neobrutal-btn:hover:not(:disabled) {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0px #000000;
        }

        .submit-neobrutal-btn:active:not(:disabled) {
          transform: translate(3px, 3px);
          box-shadow: 2px 2px 0px #000000;
        }

        .submit-neobrutal-btn:disabled {
          background: #EAEAEA;
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Loading Spinner ala Retro */
        .retro-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #000000;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.5s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── HINT BOX AKUN BAWAAN (NEOBRUTAL STYLE) ── */
        .neobrutal-hint-box {
          margin-top: 24px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #FFFFFF;
          border: 3px solid #000000;
          box-shadow: 4px 4px 0px #000000;
          padding: 12px 14px;
          font-size: 12px;
          color: #000000;
          line-height: 1.4;
        }

        .neobrutal-hint-box svg {
          color: #000000;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .neobrutal-hint-box strong {
          background: #FFE600;
          border: 1.5px solid #000000;
          padding: 1px 4px;
          font-weight: 700;
        }
      `}</style>

      {/* Main Container Neobrutalism UI */}
      <div className="neobrutal-panel">
        
        {/* Header Banner - Persis seperti Judul Kotak Dashboard */}
        <div className="panel-header-box">
          <div className="neon-logo-square">
            <Calendar size={24} />
          </div>
          <div className="header-text-group">
            <h1>EVENTHUB</h1>
            <p>EVENT MANAGEMENT SYSTEM</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="neobrutal-form">
          {/* Baris NIM */}
          <div className="form-group">
            <label>NIM</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Masukkan NIM"
                required
                autoComplete="username"
              />
              <Hash size={18} className="input-icon" />
            </div>
          </div>

          {/* Baris Password */}
          <div className="form-group">
            <label>PASSWORD</label>
            <div className="input-wrapper">
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                required
                autoComplete="current-password"
              />
              <Lock size={18} className="input-icon" />
              <button
                type="button"
                className="eye-toggle-btn"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {/* Tombol Submit Besar Tebal */}
          <button type="submit" className="submit-neobrutal-btn" disabled={isLoading}>
            {isLoading ? <div className="retro-spinner" /> : 'Masuk ke Dashboard'}
          </button>
        </form>

        {/* Kotak Info Demo Akun */}
        <div className="neobrutal-hint-box">
          <ShieldCheck size={18} />
          <span>
            Gunakan akun bawaan sistem untuk uji coba. NIM: <strong>24090061</strong> atau Password: <strong>password123</strong>.
          </span>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;