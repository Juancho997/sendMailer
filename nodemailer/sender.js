import mailer from './config.js';

export default function sendMail(email,content){

    const emailOptions = {
            from: `${process.env.MAIL_USER}`,
            to: email,
            subject: "SendMailer says hi! :D",
            html: content
        };


    mailer.sendMail(emailOptions, (err)=>{
            if(err){return console.log(err.message)};
    
    console.log(`Email succesfully sent to ${email}`)
    
    })
};