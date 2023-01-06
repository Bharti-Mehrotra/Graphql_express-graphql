const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString }
    })
})

module.exports = UserType;