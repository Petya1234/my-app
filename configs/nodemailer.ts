const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'petralekseenko37@gmail.com',
      pass: 'mtchlzyypxnjclxv'
  }
});

