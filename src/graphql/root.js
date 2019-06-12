const Event = require('../models/event');
const Holiday = require('../models/holiday');

module.exports = {
  listEvents() {
    return Event.find();
  },
  createEvent(input) {
    const newEvent = new Event(input);
    return newEvent.save();
  },
  updateEvent(input) {
    const {id, ...rest} = input;
    return Event.findByIdAndUpdate(id, {$set: rest}, {new: true}).catch(err =>
      console.error(err),
    );
  },
  deleteEvent({id}) {
    return Event.findByIdAndDelete(id)
      .then(event => event.remove())
      .then(() => `${id} successfully deleted`)
      .catch(err => console.error(err));
  },
  createHoliday(input) {
    const newHoliday = new Holiday(input);
    return newHoliday.save();
  },
  deleteHoliday({id}) {
    return Event.findByIdAndDelete(id)
      .then(event => event.remove())
      .then(() => `${id} successfully deleted`)
      .catch(err => console.error(err));
  },
};
