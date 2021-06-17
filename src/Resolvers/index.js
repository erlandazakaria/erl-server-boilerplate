import { getUserList, getUser, editUser, deleteUser, addUser, login, register } from "./user.resolver";

const rootResolver = {
  UserMessage: {
    __resolveType: (obj, context, info) => {
      if(obj.id) {
        return 'User';
      }

      if(obj.message) {
        return 'Message';
      }

      return null;
    }
  },
  Query: {
    // for admin
    getUserList,
    getUser,
    // for users
    login,
  },
  Mutation: {
    // for admin
    addUser,
    editUser,
    deleteUser,
    // for users
    register
  }
};

export default rootResolver;
