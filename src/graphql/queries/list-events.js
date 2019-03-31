const { GraphQLList } = require("graphql");
const eventGraphQLType = require("../types/event");
const eventGraphQLInputType = require("../types/event-input");
const Event = require("../../models/event");

const listEvents = {
  type: GraphQLList(eventGraphQLType),
  args: {
    input: { type: eventGraphQLInputType }
  },
  resolve(_, { input }) {
    return Event.find(input);
  }
};

module.exports = listEvents;
