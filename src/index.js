import path from "path";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import { serverPort, dbConnect } from "./config";
import typeDefs from "./TypeDefs";
import resolvers from "./Resolvers";

const exp = express();
exp.use(cors());
exp.options("*", cors());
const server = require("http").Server(exp);

exp.use(express.urlencoded({ extended: true }));
exp.use(express.json({limit: "5Mb"}));
exp.use(express.static(path.join(__dirname, "../Documents")));

const apollo = new ApolloServer({
  typeDefs,
  resolvers
});

apollo.applyMiddleware({ app: exp });

dbConnect();

server.listen(serverPort, () => {
  console.log("Hello from the otherside");
});
