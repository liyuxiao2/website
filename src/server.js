const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: process.env.MY_EMAIL, // Your email address
    from: email, // User's email address (can appear as sender)
    subject: `New message from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
  };

  sgMail.send(msg)
    .then(() => res.send("Message sent successfully"))
    .catch(error => res.status(500).send(error.toString()));
});
4