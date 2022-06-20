import { Router } from "express";
import sendMail from '../nodemailer/sender.js';
const router = Router();

router.get("/", (req, res) => {
    res.render("index", { document_title : "SendMailer", titulo: "Send an email right away!" });
  });
  
  
router.post('/send-email', async(req,res,next)=>{
    
    try{

    const {email, content} = req.body;    
    
    sendMail(email, content);
    
    res.render("send", {document_title : "SendMailer", email : email})

    }catch(err){
        next(err)
    }
});


export default router;