const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "yousseffmsadaa@gmail.com",
    password: "29244410@ym",
  },
});

module.exports.sendConfirmationEmail = (mail, activationCode) => {
  transport
    .sendMail({
      from: "yousseffmsadaa@gmail.com",
      to: email,
      Subject: "Confirmer votre compte",
      html: `<h1>Confirmer votre email</h1>
    <h2>Bonjour</h2>
    <p>Pour activer votre compte , veuillez cliquer sur le lien </p>
    <a href="http://localhost:8081/confirm/${activationCode}">Cliquer ici</a>
    `,
    })
    .catch((err) => {
      console.log(err);
    });
};
