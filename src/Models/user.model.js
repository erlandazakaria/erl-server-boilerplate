import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: function () { return new mongoose.Types.ObjectId}
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: Number
  }
}, {versionKey: false});

const User = mongoose.model("Model", userSchema, "user");
export default User;
