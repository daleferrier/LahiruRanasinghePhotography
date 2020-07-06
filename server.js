const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app=express();
var path = require("path");


app.use(express.static(path.join(__dirname, "client/build")));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post('/contact', (req, res)=>{
    // console.log(`server response: ${req.body.details}`)
    // nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `
            <h2>Hi Lahiru, you have a new enquiry: </h2>
            <h3>From: ${req.body.details.name}</h4>
            <h3>Email: ${req.body.details.email}</h5>
            <h3>Enquiry: ${req.body.details.enquiry}</h1>
        `
        const transporter = nodemailer.createTransport({
          host: "smtp.sendgrid.net",
          port: 465,
          auth: {
            user: "apikey",
            pass:
              "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",
          },
        });


        let mailOptions = {
          from: "daleferrier@hotmail.com",
          // to: "daleferrier@gmail.com",
          to: "treasurebox.photo.uk@gmail.com",
          subject: "TreasureBox Photography Enquiry", // Subject line
          text: req.body.details.enquiry, // plain text body
          html: htmlEmail, // html body
        };
 
        transporter.sendMail(mailOptions, (err, info)=>{
            if (err) {
              res.json({
                message: "fail",
              });
                return console.log(err)
            } 
            res.json({
              message: "success",
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        })
    // })
    
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);