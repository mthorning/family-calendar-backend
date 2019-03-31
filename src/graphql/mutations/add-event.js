const { GraphQLNonNull } = require("graphql");
const Event = require("../../models/event");
const { getDayOfWeek } = require("../../utils");
const eventGraphQLType = require("../types/event");
const eventGraphQLInputType = require("../types/event-input");

const addEvent = {
  type: eventGraphQLType,
  args: {
    input: { type: new GraphQLNonNull(eventGraphQLInputType) }
  },
  resolve(_, { input }) {
    const { year, month, date } = input;
    const newEvent = new Event({
      ...input,
      day: getDayOfWeek(new Date(year, month, date).getDay())
    });
    return newEvent.save();
  }
};

module.exports = addEvent;
