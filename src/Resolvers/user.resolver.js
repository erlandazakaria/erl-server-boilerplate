import UserModel from "../Models/user.model";

export const getUserList = async (root, args, context, info) => {
  try {
    const userData = await UserModel.find();
    if(userData.length > 0) {
      return userData;
    }
    return [{message: "Error Occurred!"}]
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};

export const getUser = async (root, args, context, info) => {
  try {
    const userData = await UserModel.findById(args.id)
    if(userData) {
      return userData;
    }
    return {message: "Error Occurred!"};
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};

export const editUser = async (root, args, context, info) => {
  const { name, email, password, role } = args;
  const filter = { _id: args.id };
  const editFields = { name, email, password, role };
  let message = "";
  try {
    await UserModel.updateOne(filter, editFields)
    .then(() => { message= "Data Updated"; })
    .catch(() => { message = "Error Occurred!"; })
    return { message };
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};

export const deleteUser = async (root, args, context, info) => {
  try {
    let message = "";
    await UserModel.deleteOne({_id: args.id})
    .then(() => { message= "Data Deleted"; })
    .catch(() => { message = "Error Occurred!"; })
    return { message };
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};

export const addUser = async (root, args, context, info) => {
  const { name, email, password, role } = args;
  const fields = {name, email, password, role};
  try {
    let message = "";
    const newUser = new UserModel(fields);
    await newUser.save()
    .then(() => { message = "Data Created"; })
    .catch(() => { message = "Error Occurred!"; })
    return { message };
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};

export const login = async (root, args, context, info) => {
  const { email, password } = args;
  try {
    const userData = await UserModel.find({email});
    if(userData.length > 0) {
      const checkUser = userData.find(data => data.password === password);
      if(checkUser) {
        return checkUser;
      } else {
        return {message: "Wrong Password"}  ;  
      }
    }
    return {message: "Email not Registered"};
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};

export const register = async (root, args, context, info) => {
  const { name, email, password } = args;
  try {
    const newUser = new UserModel({name, email, password});
    await newUser.save();
    return {message: "User berhasil dibuat"};
  } catch(err) {
    console.log(err);
    return {message: "Error Occurred!"};
  }
};
