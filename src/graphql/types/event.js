const { GraphQLObjectType, GraphQLString } = require("graphql");

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLString },
    start: { type: GraphQLString },
    end: { type: GraphQLString }
  })
});

module.exports = EventType;
