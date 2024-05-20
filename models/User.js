const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: String, },
  email: { type: String, required: true, unique: true },
  properties: { type: Map, of: String },
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
  unsubscribed: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
