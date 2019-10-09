import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import cors from "cors";
import passport from "passport";
import bodyParser from "body-parser";
import passportStrategy from "./lib/passportStrategy";
import logInPost from "./controllers/log-in-post";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db }
});

const app = express();
app.use(bodyParser());
app.use(cors());
passport.use(passportStrategy);
server.applyMiddleware({ app });
passport.initialize();

// routes
app.post("/log-in", logInPost);

app.use("/graphql", (req, res, next) =>
  passport.authenticate("jwt", { session: false }, user => {
    if (user) req.user = user;
    next();
  })(req, res, next)
);

app.listen({ port: process.env.GRAPGQL_PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

// Dev commands to know
/*
  Run backend:                  docker-compose up rdb api
  Run backend in background:    docker-compose up -d rdb api
  
  Sequence of commands first run: 
        docker-compose up
    New Tab:
        docker-compose exec api bash
        npm run-script setup
        exit

  When deleting models (run first):
    npm run-script unmigrate
  Migrate db changes to db:
    docker-compose exec api bash
    npm run-script migrate
    exit


  Find full list of scripts in api/package.json

  For information on Sequelize db Fucntions check out:
  http://zetcode.com/javascript/sequelize/
*/
