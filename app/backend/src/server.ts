import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'OK',
    application: 'Finance & Order Management System',
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`FOMS API running on http://localhost:${PORT}`);
});