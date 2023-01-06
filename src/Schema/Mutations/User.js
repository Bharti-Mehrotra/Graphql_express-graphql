const graphql = require('graphql');
const {users} = require('../../models');
const {GraphQLList} = require('graphql')
const UserType = require('../TypeDefs/UserType');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} = graphql;
module.exports.USER_ADD =  {
    type:UserType,
    args:{
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        gender:{type:GraphQLString}
    },
    resolve(parent, args) {
        console.log("arguments is = ",args);
        users.create({
            name:args.name,
            email:args.email,
            gender:args.gender
        })
        return args
    }
}