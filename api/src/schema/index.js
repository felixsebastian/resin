import { makeExecutableSchema } from "graphql-tools";
import mutations from "./mutations";
import queries from "./queries";
import enums from "./enums";
import types from "./types";
import inputTypes from "./inputTypes";

export default "".concat(queries, mutations, enums, types, inputTypes);

// export default makeExecutableSchema({
//   //typeDefs: [queries, mutations, enums, types, inputTypes],
//   typeDefs: [],
//   resolvers: {}
// });
