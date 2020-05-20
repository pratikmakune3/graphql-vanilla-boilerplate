import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import models from './models';

// fileLoader - much faster than importing each schema/resolver seperately and wiring em' up alltogether!
const typesArray = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(typesArray, { all: true });

const resolversArray = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
 
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({ app });

// sync({ force: true }) - drops everything table+data and redo it again!!! Use it if you get any reds!
models.sequelize.sync().then(()=>{
    app.listen({ port: 8081 }, () =>
        console.log(`App running! http://localhost:8081${server.graphqlPath}`)
    );
})

