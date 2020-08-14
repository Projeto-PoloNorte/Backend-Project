const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
console.log(process.env.SENDGRID_API_KEY )
const msg = {
  to: 'lucindhy@gmail.com',
  from: 'lucindhy@gmail.com', // Use the email address or domain you verified above
  subject: 'Email recuperação de senha',
  text: 'Segue a senha de acesso ao app: 1234',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();