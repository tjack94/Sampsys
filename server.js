const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./server/controller')
const session = require('express-session')
const cors =require('cors')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(cors())

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
app.post('/api/create-user', controller.createUser)
app.get('/api/auth/me', controller.authCheck, controller.userInfo)
app.post('/api/auth/logout', (req, res, next ) => req.session.destroy(()=>res.sendStatus(200) ))

const port = 3002

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});