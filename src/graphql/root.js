const Event = require('../models/event');

module.exports = {
  listEvents() {
    return Event.find();
  },
  create(input) {
    const newEvent = new Event(input);
    return newEvent.save();
  },
  update(input) {
    const { id, ...rest } = input;
    return Event.findByIdAndUpdate(id, { $set: rest }, { new: true }).catch(
      err => console.error(err)
    );
  },
  delete({ id }) {
    return Event.findByIdAndDelete(id)
      .then(event => event.remove())
      .then(() => `${id} successfully deleted`)
      .catch(err => console.error(err));
  }
};
