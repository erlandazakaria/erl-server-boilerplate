import mongoose from "mongoose";

const serverPort = 8080;
const dbServer = "mongodb://localhost:27017/practice";

const dbConnect = async () => {
  try {
    await mongoose.connect(dbServer, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database Connected")
  } catch(err) {
    console.log("Database Connection Error", err)
  }
};

export {
  serverPort,
  dbConnect
};
