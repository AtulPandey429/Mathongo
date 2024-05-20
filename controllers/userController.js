const List = require('../models/List');
const User = require('../models/User');
const csvParser = require('../utils/csvParser');
const csvService = require('../services/csvService');

exports.addUsers = async (req, res) => {
  const { listId } = req.params;
  const file = req.file;

  try {
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    const users = await csvParser.parseCSV(file.path);
    const { successCount, errorCount, errorCSV } = await csvService.processUsers(users, list);

    res.status(200).json({
      message: 'CSV processed',
      successCount,
      errorCount,
      errorCSV,
      users
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
