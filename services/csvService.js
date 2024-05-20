const User = require('../models/User');

exports.processUsers = async (users, list) => {
  let successCount = 0;
  let errorCount = 0;
  let errorCSV = [];

  for (const user of users) {
    const properties = {};
    list.customProperties.forEach(prop => {
      properties[prop.title] = user[prop.title] || prop.fallback;
    });

    const newUser = new User({
      name: user.name,
      email: user.email,
      properties,
      listId: list._id,
    });

    try {
      await newUser.save();
      successCount++;
    } catch (error) {
      errorCount++;
      errorCSV.push({ ...user, error: error.message });
    }
  }

  return { successCount, errorCount, errorCSV };
};
