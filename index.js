import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({ app });

// sync({ force: true }) - drops everything table+data and redo it again!!! Use it if you get any reds!
models.sequelize.sync({ force: true }).then(()=>{
    app.listen({ port: 8081 }, () =>
        console.log(`App running! http://localhost:8081${server.graphqlPath}`)
    );
})

