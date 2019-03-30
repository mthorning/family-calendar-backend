const { GraphQLObjectType } = require("graphql");
const listEvents = require("./list-events");

module.exports = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    listEvents
  }
});
