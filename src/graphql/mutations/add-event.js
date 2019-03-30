const { GraphQLString } = require("graphql");
const eventGraphQLType = require("../types/event");
const Event = require("../../models/event");

const addEvent = {
  type: eventGraphQLType,
  args: {
    start: { type: GraphQLString },
    end: { type: GraphQLString }
  },
  resolve(parent, args) {
    const newEvent = new Event({
      start: args.start,
      end: args.end
    });
    return newEvent.save();
  }
};

module.exports = addEvent;
