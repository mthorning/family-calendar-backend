const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  childCover: Boolean,
  notes: String,
});

module.exports = mongoose.model('Event', EventSchema);
