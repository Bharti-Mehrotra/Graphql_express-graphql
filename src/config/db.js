const mongoose = require('mongoose');
const MONGODB = "mongodb+srv://bharti:bharti@cluster0.hfrmymd.mongodb.net/?retryWrites=true&w=majority";
console.log("inside db")
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB)
.then(()=>{
    console.log("MongoDB Connection Successful");
    // return server.listen({port:5000});
})