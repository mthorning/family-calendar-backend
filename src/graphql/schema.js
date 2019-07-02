const {buildSchema} = require('graphql');

module.exports = buildSchema(`
  type Event {
    id: ID
    title: String
    childCover: Boolean
    notes: String
    start: String
    end: String
  }
  type Holiday {
    id: ID
    start: String
    end: String
    }
  type Query {
    listEvents(start: String, end: String): [Event]
    listHolidays: [Holiday]
  }
  type Mutation {
    createEvent(title: String!, start: String, end: String, childCover: Boolean, notes: String): Event
    updateEvent(id: String!, title: String, start: String, end: String, childCover: Boolean, notes: String): Event
    deleteEvent(id: String!): Event
    createHoliday(start: String!, end: String!): Holiday
    deleteHoliday(id: String!): Holiday
  }
`);
