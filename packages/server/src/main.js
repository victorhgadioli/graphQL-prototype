import express from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.applyMiddleware({
  app,
  cors: {
    origin: "http://localhost:3000",
  },
  bodyParserConfig: true,
});

// server.get("/status", (_, res) => {
//   res.send({
//     status: "OK",
//   });
// });

// const enableCors = cors({
//   origin: "http://localhost:3000",
// });

// server
//   .options("/authenticate", enableCors)
//   .post("/authenticate", enableCors, express.json(), (req, res) => {
//     res.send({
//       Okay: true,
//     });
//   });

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
