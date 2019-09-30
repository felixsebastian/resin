import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import cors from "cors";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
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
