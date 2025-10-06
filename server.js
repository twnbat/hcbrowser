import express from 'express'
import { dirname, join} from 'path'
import { fileURLToPath } from 'url'
import livereload from 'livereload'
import connectLiveReload from 'connect-livereload'
import route from './backend/routes/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(join(__dirname, 'public'));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => liveReloadServer.refresh("/"), 100);
});
app.use(connectLiveReload());


app.use(express.static(join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});