export default `
    type User {
        id: Int!
        email: String!
        password: String!
    }

    type Query {
        getUser(id: Int!): User!
        allUsers: [User!]!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
    }
`;