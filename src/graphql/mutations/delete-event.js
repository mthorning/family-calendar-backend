const { GraphQLString } = require("graphql");
const eventGraphQLType = require("../types/event");
const Event = require("../../models/event");

const deleteEvent = {
  type: eventGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Event.findByIdAndDelete(args.id)
      .then(event => event.remove())
      .catch(err => console.error(err));
  }
};

module.exports = deleteEvent;
