import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import route from './backend/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Livereload (development only) ----------
if (process.env.NODE_ENV !== 'production') {
  import('livereload').then(({ default: livereload }) => {
    import('connect-livereload').then(({ default: connectLiveReload }) => {
      const liveReloadServer = livereload.createServer();
      liveReloadServer.watch(join(__dirname, 'public'));
      liveReloadServer.server.once('connection', () => {
        setTimeout(() => liveReloadServer.refresh('/'), 100);
      });

      app.use(connectLiveReload());
      console.log('Livereload enabled (development mode)');
    });
  });
}
// ---------------------------------------------------

// Serve static files
app.use(express.static(join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', route);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
