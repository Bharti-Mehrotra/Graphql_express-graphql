const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const {GETALLUSERS,GETUSERBYID} = require('./Queries/User')
const {USER_ADD} = require('./Mutations/User')

const RootQuery = new GraphQLObjectType({
    name: 'query',
    fields: {
        getAllUsers: GETALLUSERS,
        getUserbyId:GETUSERBYID
    }
})

const Mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        createUser:USER_ADD
    }
})
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })