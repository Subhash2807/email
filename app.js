var nodemailer = require("nodemailer");
var dotenv = require('dotenv');

var result = dotenv.config()

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
});

var mailOptions = {
    from:process.env.USER,
    to:"subhashchaurasia67@gmail.com",
    subject:"sending email from node.js",
    html:"<h1>Welcome</h1><br><p>That was easy!</p>"
};

transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log("err");
    }
    else{
        console.log("email sent ");
    }
});