import express from "express";
import v1router from "./v1/v1Router.js";

//console.log("apiroutes");
const router= express.Router();

router.use('/v1',v1router);

export default router;