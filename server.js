const express = require('express');
const app = express();
const PORT = 3000;
const { graphqlHTTP } = require('express-graphql')

const schema = require('./src/Schema')
require('./src/models/index')
require('./src/config/db')
app.use(express.json())

app.use("/graphql",
    graphqlHTTP({
        schema,
        graphiql:true
    })
)

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})