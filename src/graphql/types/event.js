const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require("graphql");

const TimeType = new GraphQLObjectType({
  name: "Time",
  fields: () => ({
    hours: { type: GraphQLInt },
    minutes: { type: GraphQLInt }
  })
});

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLString },
    full_day: { type: GraphQLBoolean },
    start_time: { type: TimeType },
    end_time: { type: TimeType },
    date: { type: GraphQLInt },
    month: { type: GraphQLInt },
    year: { type: GraphQLInt },
    day: { type: GraphQLString },
    type: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});

module.exports = EventType;
