const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true,trim: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  role: {
    type: String,
    enum: ['customer', 'admin', 'delivery'],
    default: 'customer',
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
