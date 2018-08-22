module.exports={
    loginUser: (req, res, next)=>{
        const { username, password } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.login_user([username, password])
        .then(user=> {{req.session.userid= user[0].id}res.status(200).send(user)})
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    createUser: (req, res, next) => {
        const {username, password, email, firstName, lastName} = req.body
        const dbInstance = req.app.get('db')

        dbInstance.create_user([username, password, email, firstName, lastName])
        .then(()=> { res.status(200).send({message: 'item added to database'})})
       .catch((err) => {
        res.status(500).send({ errorMessage: 'Something went wrong!' });
        console.log(err);
     })
    },
    userInfo: (req, res, next)=>{
        const dbInstance = req.app.get('db')
        const user_id = req.session.userid

        dbInstance.get_user_info([user_id])
        .then(user=>{
            res.status(200).send(user)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    authCheck: (req, res, next) =>{
        if(req.session.userid){
           next()
        }else{
            res.sendStatus(403)
        }
            
        
    },
    getUserSurveys: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const user_id = req.session.userid

        dbInstance.get_user_surveys([user_id])
        .then(surveys => {
            res.status(200).send(surveys)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getCollectiveResponses: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {surveyid} = req.params 

        dbInstance.get_collective_responses([surveyid])
        .then(responses => {
            res.status(200).send(responses)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getIndividualResponse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {surveyid, userid} = req.params 

        dbInstance.get_individual_responses([surveyid, userid])
        .then(responses => {
            res.status(200).send(responses)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getSurveyId: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {surveyid} = req.params 

        dbInstance.get_survey_id([surveyid])
        .then(id => {
            {console.log(id)}
            {req.session.surveyid= id[0].survey_id}
            res.status(200).send(id)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    createSurvey: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name} = req.body 
        const user_id = req.session.userid

        dbInstance.surveys.insert({survey_name: name, user_id: user_id, response_count: 0 })
        .then( survey => {
            {req.session.surveyid = survey.survey_id}
            res.status(200).send(survey)
        }
        )
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getSurveyInfo: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const survey_id = req.session.surveyid

        dbInstance.get_survey_info([survey_id])
        .then( survey => {
            res.status(200).send(survey)
        }
        )
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getQuestions: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const survey_id = req.session.surveyid

        dbInstance.get_questions([survey_id])
        .then(questions => {
            res.status(200).send(questions)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    addQuestionMC: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const survey_id = req.session.surveyid
        const {question, questionType, possibleResponses} = req.body

        dbInstance.add_question([survey_id, questionType, question, possibleResponses])
        .then(()=>{
            res.sendStatus(200)
        }).catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    addQuestionSimple: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const survey_id = req.session.surveyid
        const {question, questionType } = req.body
        const possibleResponses = null

        dbInstance.add_question([survey_id, questionType, question, possibleResponses])
        .then(()=>{
            res.sendStatus(200)
        }).catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getSurveyNumber: (req, res, next) => {
        const survey_id = req.session.surveyid
        res.status(200).send([survey_id])
    },
    getIndividualSurvey: (req, res, next) =>{
        const {surveyid} = req.params
        const dbInstance = req.app.get('db')

        dbInstance.get_survey_info([surveyid])
        .then( survey => {
            {req.session.surveyid = survey[0].survey_id;
            req.session.email =survey[0].email;
            req.session.surveyName =survey[0].survey_name;
            req.session.firstName= survey[0].first_name
            }
            res.status(200).send(survey)
        }
        )
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    createConsumer: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.consumers.insert({placeholder: ''})
        .then( consumer => {
            {req.session.consumerid = consumer.consumer_id}
            res.sendStatus(200)
        }
        )
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
        
    },
    getSurveyQuestionsParam: (req, res, next) => {
        const {surveyid} = req.params
        const dbInstance = req.app.get('db')

        dbInstance.get_questions([surveyid])
        .then(questions => {
            res.status(200).send(questions);
            
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         }) 

    },
    getIndividualQuestion: (req, res, next) => {
        const {questionid} = req.params
        const dbInstance = req.app.get('db')

        dbInstance.get_individual_question([questionid])
        .then( question => {
            res.status(200).send(question)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         }) 
    },
    addResponses: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {surveyid} = req.params

        dbInstance.responses.insert(req.body)
        .then(()=>{
            dbInstance.update_num_of_responses([surveyid])
            .then(()=>{
                res.sendStatus(200)
                next()
            })
        }).catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getConumer: (req, res, next) => {
        const consumer_id = req.session.consumerid
        

        res.status(200).send({consumer_id})
    },
    deleteSurvey: (req, res, next) =>{
        const {surveyid} = req.params
        const dbInstance = req.app.get('db')

        dbInstance.delete_survey([surveyid])
        .then(()=>{
            dbInstance.update_num_of_responses([surveyid])
            .then(()=>{
                res.sendStatus(200)
            })
        }).catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    getChartData: (req, res, next) => {
        const {questionid} = req.params
        const dbInstance = req.app.get('db')

        dbInstance.get_chart_data([questionid])
        .then((data)=>{
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         }) 
    },
    deleteQuestion: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {questionid} = req.params

        dbInstance.delete_question([questionid])
        .then(()=>{
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    updateUserInfo: (req, res, next)=> {
        const dbInstance = req.app.get('db')
        const {username, email, firstName, lastName} = req.body
        const userId = req.session.userid

        dbInstance.update_user_info([username, email, firstName, lastName, userId])
        .then(()=>{
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },
    updatePassword: (req, res, next) =>{
        const dbInstance = req.app.get('db')
        const userId = req.session.userid
        const {password} = req.body

        dbInstance.update_password([password, userId])
        .then(()=>{
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    }
    
}