const {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

const fields = () => ({
  id: { type: GraphQLString },
  allDay: { type: GraphQLBoolean },
  start: { type: GraphQLString },
  end: { type: GraphQLString },
  title: { type: GraphQLString }
});

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields
});

const EventInputType = new GraphQLInputObjectType({
  name: 'EventInput',
  fields
});
module.exports = { EventType, EventInputType };
