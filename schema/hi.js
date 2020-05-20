const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        hi: String
    }
`;

module.exports = typeDefs;
