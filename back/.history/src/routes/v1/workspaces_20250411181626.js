import express from 'express';
 
import {
    createWorkspaceController,
    deleteWorkspaceController,
    getWorkspacesUserIsMemberOfController
} from '../../controllers/workspaceController.js';
 
import { isAuthenticated } from '../../middlewares/authMiddleware.js';
import { createWorkspaceSchema } from '../../validator/workspaceSchema.js';
import { validate } from '../../validator/zodValidator.js';
 
 const router = express.Router();
 
 //create krte smy sign user ka token header ke x-access-token mai put krna
 router.post(
   '/',
   isAuthenticated,
   validate(createWorkspaceSchema),
   createWorkspaceController
 );

 router.get('/', isAuthenticated, getWorkspacesUserIsMemberOfController);
 
 router.delete('/:workspaceId', isAuthenticated, deleteWorkspaceController);

 export default router;