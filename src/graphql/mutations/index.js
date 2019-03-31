const { GraphQLObjectType } = require("graphql");
const addEvent = require("./add-event");
const deleteEvent = require("./delete-event");
const editEvent = require("./edit-event");

module.exports = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addEvent,
    deleteEvent,
    editEvent
  }
});
