module.exports={
    loginUser: (req, res, next)=>{
        const { username, password } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.login_user([username, password])
        .then(user=> {{req.session.userid= user[0].id}{console.log(req.session.userid)}res.status(200).send(user)})
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
            res.status(200).send(survey)
        }
        )
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    }
}