const nodemailer= require('nodemailer')

module.exports={
    sendMail: (req, res, next) =>{
        const output = `
        <p>${req.session.firstName},</p>

        <p>You have a new response to the survey, <b>${req.session.surveyName}</b> </p>

       <p>Go to <a href='www.sampsys.com'>sampysy.com</a> to view the results!
        </p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, 
            auth: {
                user: 'surveys@sampsys.com', 
                pass: process.env.PASSWORD
            },
            tls:{
                rejectUnauthorized: false
            }
        });
    
        let mailOptions = {
            from: '"Sampsys Surveys" <surveys@sampsys.com>', 
            to: req.session.email, 
            subject: 'New Survey Response', 
            html: output
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        });
    },
    distributeSurvey: (req, res, next) =>{
       
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, 
            auth: {
                user: 'surveys@sampsys.com', 
                pass: process.env.PASSWORD
            },
            tls:{
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: '"Sampsys Surveys" <surveys@sampsys.com>', 
            to: req.body.to, 
            subject: req.body.subject, 
            text: req.body.message,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
            next()
        });
    }
}