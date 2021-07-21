import { gql } from "apollo-server-express";

import { typeDefs as nodeTypeDef } from "./Node/Node";
import { typeDefs as listTypeDef } from "./List/List";
import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";

const typeDefs = gql`
  type Query {
    _root: String
  }

  type Mutation {
    _root: String
  }

  ${nodeTypeDef}
  ${listTypeDef}
  ${clientTypeDefs}
  ${demandTypeDefs}
`;

export default typeDefs;
