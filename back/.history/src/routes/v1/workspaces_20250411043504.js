import express from 'express';
 
 import { createWorkspaceController } from '../../controllers/workspaceController.js';
 import { isAuthenticated } from '../../middlewares/authMiddleware.js';
 import { createWorkspaceSchema } from '../../validators/workspaceSchema.js';
 import { validate } from '../../validators/zodValidator.js';
 
 const router = express.Router();
 
 //create krte smy sign user ka token header ke x-access token mai put krna
 router.post(
   '/',
   isAuthenticated,
   validate(createWorkspaceSchema),
   createWorkspaceController
 );
 export default router;