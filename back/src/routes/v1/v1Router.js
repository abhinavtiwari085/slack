import express from "express";
import userRouter from "./user.js";

//console.log("v1router");
const router= express.Router();

router.use('/users',userRouter);

export default router; 