const express = require('express');
const app = express();
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors');
const { urlencoded } = require('body-parser');
const { format } = require('morgan');



dotenv.config({path: './config.env'})


const port = process.env.PORT || 8080


app.use(bodyparser.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('Welcome to the API server')
})








app.listen(port, ()=>{
console.log(`server running at port ${port}`)
}) 