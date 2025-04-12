import express from "express";
import { signUp,signIn } from "../../controllers/userController.js";
import { validate } from "../../validators/zodValidator.js";
import { userSignUpSchema,userSignInSchema} from "../../validators/userSchema.js";

const router= express.Router();

//console.log("userrouter");
router.get('/',(req,res)=>{
    return res.json({
        message:"chal gya bhai route se message",
    });
});

router.post('/signup',validate(userSignUpSchema),signUp);
router.post('/signin',validate(userSignInSchema),signIn);


export default router; 