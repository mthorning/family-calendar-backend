const { GraphQLList } = require('graphql');
const { EventType, EventInputType } = require('../types/event');
const Event = require('../../models/event');

const listEvents = {
  type: GraphQLList(EventType),
  args: {
    input: { type: EventInputType }
  },
  resolve(_, { input }) {
    return Event.find(input);
  }
};

module.exports = listEvents;
