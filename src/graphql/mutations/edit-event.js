const Event = require("../../models/event");
const eventGraphQLType = require("../types/event");
const eventGraphQLInputType = require("../types/event-input");

const updateEvent = {
  type: eventGraphQLType,
  args: {
    input: { type: eventGraphQLInputType }
  },
  resolve(_, { input }) {
    const { id, ...rest } = input;
    return Event.findByIdAndUpdate(id, { $set: rest }, { new: true }).catch(
      err => console.error(err)
    );
  }
};

module.exports = updateEvent;
