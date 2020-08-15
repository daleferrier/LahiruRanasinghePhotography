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


        const htmlEmail = `
            <h2>Hi Lahiru, you have a new enquiry: </h2> 
            <h3>From: ${req.body.details.name}</h4>
            <h3>Email: ${req.body.details.email}</h5>
            <h3>Enquiry: ${req.body.details.enquiry}</h1>
        `
        const transporter1 = nodemailer.createTransport({
          service: "Mailjet",
          // host: "in-v3.mailjet.com",
          // host: "smtp.sendgrid.net",
          // port: 465,
          auth: {
            user: "26b65e02a0ac6faf9b6495f813ef4af4",
            // user: "apikey",
            pass: "67bdc67bccf71db9e9790662471ec371",
            // "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",
          },
        });

        const transporter2 = nodemailer.createTransport({
          service: "SendinBlue",
          // host: "in-v3.mailjet.com",
          // host: "smtp.sendgrid.net",
          // port: 465,
          auth: {
            user: "daleferrier@gmail.com",
            // user: "apikey",
            pass: "UaOcJM9DXY4N6dyR",
            // "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",
          },
        });

        const transporter3 = nodemailer.createTransport({
          host: "smtp.elasticemail.com",
          // host: "smtp.sendgrid.net",
          port: 2525,
          // port: 2525,
          auth: {
            user: "daleferrier@gmail.com",
            // user: "apikey",
            pass: "7F68990EC5CB912002E3B8946C1AD6B2B219",
            // "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",
          },
        });



        let mailOptions = {
          from: "daleferrier@hotmail.com",
          // to: "daleferrier@gmail.com",
          to: "daleferrier@gmail.com, lahiru@treasureboxphotography.co.uk",
          // to: "treasurebox.photo.uk@gmail.com",
          subject: "Treasurebox Photography Enquiry", // Subject line
          text: req.body.details.enquiry, // plain text body
          html: htmlEmail, // html body
        };
        // STORE ALL RESPONSES IN ARRAY FIRST

        // var failMessages = 5;
        // var successMessages = 5;
        let failMessages = 0;
        let successMessages = 0;

        const emailCallback = (err, info) => {
          if (err) {
            failMessages++
            res.json({
              message: "fail",
              successes: successMessages,
              fails: failMessages,
            });
            return console.log(err);
          }
          successMessages++;
          console.log(`successes are ${successMessages}`)
          res.json({
            message: "success",
            successes: successMessages,
            fails: failMessages,
          });
          console.log("Message sent: %s", info.messageId);
          // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        };


        transporter1.sendMail(mailOptions, (err, info)=>{
          if(err){
            failMessages++
             (console.log(err));
          }
          console.log('transporter1 executed')
          console.log(info.messageId)
          successMessages++
          transporter2.sendMail(mailOptions, (err, info) => {
            if (err) {
              failMessages++;
               console.log(err);
            }
            console.log("transporter2 executed");
            console.log(info.messageId);
            successMessages++;
                    transporter3.sendMail(mailOptions, (err, info) => {
                      if (err) {
                        failMessages++;
                         console.log(err);
                      }
                      successMessages++;
                      console.log("transporter3 executed");
                      console.log(info.messageId);
                      console.log(`successes are ${successMessages}`);
                      res.json({
                        successes: successMessages,
                        fails: failMessages,
                        completed: false,
                        buttonDisabled: false
                      })
                      return;
                    });
          });
        });
        

        // transporter3.sendMail(mailOptions, emailCallback);
})

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);