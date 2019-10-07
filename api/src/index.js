import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import cors from "cors";
import rootUser from "./config/rootUser";
import passport from "passport";
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const { GRAPGQL_PORT, JWT_SECRET } = process.env;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db }
});

const { Strategy, ExtractJwt } = passportJWT;

passport.use(
  new Strategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    (payload, done) => {
      if (payload === "ROOT_USER") return done(null, rootUser);
      // users.find(user => user.id === payload.id) ||
      const user = null;
      return done(null, user);
    }
  )
);

const app = express();
app.use(bodyParser());
app.use(cors());
server.applyMiddleware({ app });
passport.initialize();

app.use("/graphql", (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) req.user = user;
    next();
  })(req, res, next);
});

app.post("/log-in", (req, res) => {
  console.log(req.body);
  if (
    req.body.username === rootUser.username &&
    req.body.password === rootUser.password
  )
    res.send({
      success: true,
      username: rootUser.username,
      token: jwt.sign("ROOT_USER", JWT_SECRET)
    });
  else res.send({ success: false });
});

app.listen({ port: GRAPGQL_PORT }, () =>
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
