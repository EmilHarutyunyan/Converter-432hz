import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';

import apiRouter from './routes/api.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(cors({
  origin: '*'
}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', apiRouter);

export default app;