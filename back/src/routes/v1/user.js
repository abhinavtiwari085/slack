import express from "express";

const router= express.Router();

//console.log("userrouter");
router.get('/',(req,res)=>{
    return res.json({
        message:"chal gya bhai route se message",
    });
});

export default router;