const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        bi: String
    }
`;

module.exports = typeDefs;
