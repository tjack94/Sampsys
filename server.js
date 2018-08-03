const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./server/controller')
const session = require('express-session')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }))

massive(process.env.CONNECTION_STRING)
.then(db=>{
    console.log('db Connected')
    app.set("db", db)
})
.catch(err => console.log(err))

app.post('/api/login', controller.loginUser)

const port = 3002

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});