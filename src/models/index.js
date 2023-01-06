const {model,Schema} = require('mongoose');
const Users = new Schema({
    name:String,
    email:String,
    gender:String,
    status:String,
});

let u = model('users',Users);

module.exports= {users:u};