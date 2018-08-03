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
            
        
    }
}