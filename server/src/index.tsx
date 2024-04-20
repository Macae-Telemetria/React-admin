import express from 'express';
import path from 'path';
import cors from "cors"

const PORT = process.env.PORT || 8080;
const server = express();
server.use(cors());

const CLIENT_DIST_DIR = path.resolve(__dirname, "static");

server.use('/', express.static(CLIENT_DIST_DIR));

server.get('/admin/:path*?', (req, res) => {
  return res.sendFile(path.join(CLIENT_DIST_DIR, 'admin', 'index.html'));
});

server.get('/:path*?', (req, res) => {
  return res.sendFile(path.join(CLIENT_DIST_DIR, "attendant", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
