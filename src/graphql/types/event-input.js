const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require("graphql");

const TimeType = new GraphQLInputObjectType({
  name: "TimeInput",
  fields: () => ({
    hours: { type: GraphQLInt },
    minutes: { type: GraphQLInt }
  })
});

const EventType = new GraphQLInputObjectType({
  name: "EventInput",
  fields: () => ({
    id: { type: GraphQLString },
    full_day: { type: GraphQLBoolean },
    start_time: { type: TimeType },
    end_time: { type: TimeType },
    date: { type: GraphQLInt },
    month: { type: GraphQLInt },
    year: { type: GraphQLInt },
    type: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

module.exports = EventType;
