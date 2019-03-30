const koa = require("koa");
const graphqlHTTP = require("koa-graphql");
const mount = require("koa-mount");
const schema = require("./graphql/schema");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/family-calendar", {
  useNewUrlParser: true
});

mongoose.connection.once("open", () => console.log("Database connected."));

const app = new koa();
app.listen(9000);

app.on("error", err => {
  console.log("Server error", err);
});

app.use(
  mount(
    "/api",
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )
);
