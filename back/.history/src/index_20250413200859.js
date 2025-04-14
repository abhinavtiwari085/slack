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

import Workspace from '../src/schema/workspace.js'; 
app.get('/pong', async (req, res) => {
    try {
        const workspaceId = req.query.workspaceId;
        console.log("work space id", workspaceId);
        if (!workspaceId) {
            return res.status(400).json({ error: 'workspaceId is required' });
        }
        const workspace = await Workspace.findById(workspaceId);

        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }

        return res.status(200).json({ workspace });
    } catch (error) {
        console.error('Error fetching workspace:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
}); 