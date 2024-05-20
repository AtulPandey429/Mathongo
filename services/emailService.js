const transporter = require('../config/emailConfig');
const emailTemplate = require('../utils/emailTemplate');

exports.sendBulkEmails = async (users, subject, body, customProperties) => {
  for (const user of users) {
    const emailBody = emailTemplate.replacePlaceholders(body, user, customProperties);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject,
      html: emailBody,
    });
  }
};
