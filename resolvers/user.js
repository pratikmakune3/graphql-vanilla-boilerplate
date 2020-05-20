export default {
    Query: {
        getUser: (parent, {id}, {models}, info) => models.User.findOne({where: {id}}),
        allUsers: (parent, args, {models}, info) => models.User.findAll(),
    },

    Mutation: {
        createUser: (parent, args, {models}, info) => models.User.create(args)
    }
}