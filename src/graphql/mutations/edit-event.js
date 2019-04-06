const Event = require('../../models/event');
const { EventType, EventInputType } = require('../types/event');

const updateEvent = {
  type: EventType,
  args: {
    input: { type: EventInputType }
  },
  resolve(_, { input }) {
    const { id, ...rest } = input;
    return Event.findByIdAndUpdate(id, { $set: rest }, { new: true }).catch(
      err => console.error(err)
    );
  }
};

module.exports = updateEvent;
