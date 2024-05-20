const List = require('../models/List');

exports.createList = async (req, res) => {
  const { title, customProperties } = req.body;
  try {
    const list = new List({ title, customProperties });
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
