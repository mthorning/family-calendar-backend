const mongoose = require('mongoose');

const HolidaySchema = new mongoose.Schema({
  start: Date,
  end: Date,
});

module.exports = mongoose.model('Holiday', HolidaySchema);
