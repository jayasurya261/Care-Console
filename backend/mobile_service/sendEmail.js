import nodemailer from 'nodemailer';

// Create the transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '727723eucs090@skcet.ac.in',       // Your Gmail address in quotes
    pass: 'skcet@123',                 // Your app-specific password
  },
});

// Define a function to send email
const sendEmail = (recipientEmail, subject, text) => {
  const mailOptions = {
    from: '727723eucs090@skcet.ac.in', // Sender's email address
    to: recipientEmail,                // Recipient's email address
    subject: subject,                  // Email subject
    text: text,                        // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error: ', error);
    }
    console.log('Email sent: ' + info.response);
  });
};

// Example usage
const recipientEmail = 'suryasunrise261@gmail.com'; // Replace with the actual recipient's email
const subject = 'Test Email';                     // Subject of the email
const text = 'This is a test email using Nodemailer with Gmail!'; // Body of the email
sendEmail(recipientEmail, subject, text);
