import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";

const app = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer({
  schema
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log(`Server running on port: ${port}`);
});
