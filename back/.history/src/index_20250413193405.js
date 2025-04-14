import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});
import Workspace from '../schema/workspace.js';
app.get('/pong',(req,res)=>{
    const workspace = await Workspace.findById(workspaceId);
    console.log("", workspace);
    return res.status(200).json({ message:workspace});
})

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
}); 