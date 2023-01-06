const {users} = require('../../models');
const {GraphQLList, GraphQLString} = require('graphql')
const UserType = require('../TypeDefs/UserType');

module.exports.GETALLUSERS =  {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        console.log("users are ",users)
        let data = users.find();
        return data
    }
}

module.exports.GETUSERBYID =  {
    type: new GraphQLList(UserType),
    args:{
        id:{type:GraphQLString}
    },
    resolve(parent, args) {
        console.log("args is ",args)
        let data = users.findOne(args.id);
        return data
    }
}