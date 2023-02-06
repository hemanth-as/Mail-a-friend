var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testerheman@gmail.com',
    pass: 'dzcpctoqluctsvfi'
  }
});

var mailOptions = {
  from: 'testerheman@gmail.com',
  to: 'testerheman@gmail.com',
  subject: 'Sending Email using nodemailer package',
  text: 'Email send successfully!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});