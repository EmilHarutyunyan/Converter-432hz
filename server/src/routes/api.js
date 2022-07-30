import express from 'express';

import youtubeRouter from './youtube/youtube.router.js';


const apiRouter = express.Router();

apiRouter.use('/youtubeUrl', youtubeRouter);

export default apiRouter;
