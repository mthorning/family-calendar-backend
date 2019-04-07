const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Event {
    id: ID,
    title: String
    allDay: Boolean
    start: String,
    end: String
  }
  type Query {
    listEvents: [Event!]!
  }
  type Mutation {
    create(title: String!, start: String, end: String, allDay: Boolean): Event
    update(id: String!, title: String, start: String, end: String, allDay: Boolean): Event
    delete(id: String!): String
  }
`);
