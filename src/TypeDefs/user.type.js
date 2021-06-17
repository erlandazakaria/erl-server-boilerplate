export const userType = `
  union UserMessage = User | Message

  type User {
    _id: String
    name: String
    email: String
    password: String
    role: Int
  }
`;

export const userQuery = `
  getUserList: [UserMessage]
  getUser(id: String): UserMessage
  login(email: String, password: String): UserMessage
`;

export const userMutation = `
  register(name: String!, email: String!, password: String!): Message 
  editUser(
    id: String!, 
    name: String!, 
    email: String!, 
    password: String!,
    role: Int
  ): Message
  deleteUser(id: String!): Message
  addUser(name: String!, email: String!, password: String!, role: Int): Message 
`;
