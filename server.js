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
app.get('/api/get-user-surveys', controller.getUserSurveys)
app.get('/api/collective-responses/:surveyid', controller.getCollectiveResponses)
app.get('/api/individual-response/:surveyid/:userid', controller.getIndividualResponse)
app.get(`/api/get-surveyid/:surveyid`, controller.getSurveyId)
app.post('/api/create-survey', controller.createSurvey)
app.get('/api/get-survey-info', controller.getSurveyInfo)
app.get('/api/get-survey-questions', controller.getQuestions)
app.post('/api/add-question/multiple-choice', controller.addQuestionMC)
app.post('/api/add-question/simple-question', controller.addQuestionSimple)
app.get('/api/get-surveyid', controller.getSurveyNumber)
app.get('/api/start-survey/:surveyid', controller.getIndividualSurvey)
app.post('/api/create-consumerid', controller.createConsumer)
app.get(`/api/get-survey-questions/:surveyid`, controller.getSurveyQuestionsParam)
app.get('/api/get-individual-question/:questionid', controller.getIndividualQuestion)
app.post('/api/add-response/:questionid', controller.addResponse)
app.get('/api/get-consumerid', controller.getConumer)
app.get('/api/survey-ready', (req, res, next)=> res.sendStatus(200))
app.post('/api/auth/logout', (req, res, next ) => req.session.destroy(()=>res.sendStatus(200) ))

const port = 3002

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});