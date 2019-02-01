import { makeExecutableSchema } from "graphql-tools";

import types from "./types";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: types
});

export default schema;
