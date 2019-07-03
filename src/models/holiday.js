const mongoose = require('mongoose');

const HolidaySchema = new mongoose.Schema({
  start: Date,
  end: Date,
});

console.log('creating Holiday model');
module.exports = mongoose.model('Holiday', HolidaySchema);
