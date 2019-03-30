const { GraphQLList } = require("graphql");
const eventGraphQLType = require("../types/event");
const Event = require("../../models/event");

const listEvents = {
  type: GraphQLList(eventGraphQLType),
  args: {},
  resolve(parent, args) {
    return Event.find();
  }
};

module.exports = listEvents;
