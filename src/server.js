const koa = require('koa');
const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');
const schema = require('./graphql/schema');
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost';

mongoose.connect(`${mongoUrl}/family-calendar`, {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected.'));

const app = new koa();
app.listen(9001);

app.on('error', err => {
  console.log('Server error', err);
});

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )
);
