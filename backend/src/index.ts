import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Menggunakan impor tanpa ekstensi .js untuk kompatibilitas ts-node/CommonJS
import routes from './routes/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Event Management API is running' });
});

// Routes
app.use('/api', routes);

// Logika server lokal: 
// Hanya menjalankan app.listen jika file ini dijalankan secara langsung (npm run dev)
// Tidak akan dijalankan jika di-import oleh sistem Vercel (production)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;