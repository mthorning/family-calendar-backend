const Event = require('../models/event');
const Holiday = require('../models/holiday');

module.exports = {
  listEvents(filter) {
    /*if (filter) {
      return Event.find({
        $and: [
          {start: {$gt: new Date(filter.start)}},
          {end: {$lt: new Date(filter.end)}},
        ],
      });
    }*/
    console.log('list events called');
    return Event.find();
  },
  createEvent(input) {
    const inputWithMonth = {
      ...input,
      month: new Date(input.start).getMonth(),
    };
    const newEvent = new Event(inputWithMonth);
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
      .catch(err => console.error(err));
  },
  listHolidays() {
    console.log('list holidays called');
    return Holiday.find();
  },
  createHoliday(input) {
    const newHoliday = new Holiday(input);
    return newHoliday.save();
  },
  deleteHoliday({id}) {
    return Holiday.findByIdAndDelete(id)
      .then(holiday => holiday.remove())
      .catch(err => console.error(err));
  },
};
