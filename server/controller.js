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
    }
}