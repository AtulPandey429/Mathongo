const List = require('../models/List');
const User = require('../models/User');
const emailService = require('../services/emailService');

exports.sendEmails = async (req, res) => {
  const { listId } = req.params;
  const { subject, body } = req.body;

  try {
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    const users = await User.find({ listId, unsubscribed: false });
    await emailService.sendBulkEmails(users, subject, body, list.customProperties);

    res.status(200).json({ message: 'Emails sent' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.unsubscribeUser = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.unsubscribed = true;
    await user.save();

    res.status(200).json({ message: 'User unsubscribed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};