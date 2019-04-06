const { GraphQLString } = require('graphql');
const { EventType } = require('../types/event');
const Event = require('../../models/event');

const deleteEvent = {
  type: EventType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(_, args) {
    return Event.findByIdAndDelete(args.id)
      .then(event => event.remove())
      .catch(err => console.error(err));
  }
};

module.exports = deleteEvent;
