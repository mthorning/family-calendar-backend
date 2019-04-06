const { GraphQLNonNull } = require('graphql');
const Event = require('../../models/event');
const { EventType, EventInputType } = require('../types/event');

const addEvent = {
  type: EventType,
  args: {
    input: { type: new GraphQLNonNull(EventInputType) }
  },
  resolve(_, { input }) {
    const newEvent = new Event(input);
    return newEvent.save();
  }
};

module.exports = addEvent;
