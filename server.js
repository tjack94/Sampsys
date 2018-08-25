const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./server/controller')
const session = require('express-session')
const cors =require('cors')
const nodemailer= require('nodemailer')
require('dotenv').config()

const mailController= require('./server/mailController')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/../build'));

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
app.get('/api/get-survey-number', controller.getSurveyNumber)
app.get('/api/start-survey/:surveyid', controller.getIndividualSurvey)
app.post('/api/create-consumerid', controller.createConsumer)
app.get(`/api/get-survey-questions/:surveyid`, controller.getSurveyQuestionsParam)
app.get('/api/get-individual-question/:questionid', controller.getIndividualQuestion)
app.post('/api/add-responses/:surveyid', controller.addResponses, mailController.sendMail)
app.get('/api/get-consumerid', controller.getConumer)
app.get('/api/get-chart-data/:questionid', controller.getChartData)
app.get('/api/user-login-check', controller.loginCheck)
app.delete('/api/delete-survey/:surveyid', controller.deleteSurvey)
app.delete('/api/delete-question/:questionid', controller.deleteQuestion)
app.patch('/api/update-user-info', controller.updateUserInfo)
app.patch('/api/update-password', controller.updatePassword)
app.post('/api/distribute-survey', mailController.distributeSurvey, (req, res)=> res.sendStatus(200))
app.post('/api/auth/logout', (req, res, next ) => req.session.destroy(()=>res.sendStatus(200) ))

const port = 3002

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});