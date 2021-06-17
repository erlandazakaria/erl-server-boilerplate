const { gql } = require("apollo-server");
import { userType, userQuery, userMutation } from "./user.type";

const rootType = gql`
  type Message {
    message: String
  }

  ${userType}

  type Query {
    ${userQuery}
  }

  type Mutation {
    ${userMutation}
  }
`;

export default rootType;
