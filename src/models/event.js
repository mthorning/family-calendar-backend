const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema({
  hours: Number,
  minutes: Number
});

const EventSchema = new mongoose.Schema({
  full_day: Boolean,
  start_time: TimeSchema,
  end_time: TimeSchema,
  date: Number,
  month: Number,
  year: Number,
  day: String,
  type: String,
  name: String
});

module.exports = mongoose.model("Event", EventSchema);
