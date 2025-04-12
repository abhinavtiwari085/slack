import express from "express";
import userRouter from "./user.js";
import workspaceRouter from "./workspaces.js";

//console.log("v1router");
const router= express.Router();

router.use('/users',userRouter);
router.usr('/workspaces',workspaceRouter);

export default router; 