const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  name: String
});

module.exports = mongoose.model("Event", EventSchema);
