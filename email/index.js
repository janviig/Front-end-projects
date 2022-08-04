const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/Subscribe', (req, res) => {
    const email = req.body.email
    const note = {
        to: req.body.email,
        from: "janviguptaaaa@gmail.com",
        subject: "subscribed!",
        text: "you have succesfully subscribed!",
    };
    require('dotenv').config();
    console.log(process.env.SENDGRID_API_KEY);
    const sendMail = require('@sendgrid/mail');
    sendMail.setApiKey(process.env.SENDGRID_API_KEY);

    sendMail.send(note).then(() => {
        console.log("successful");
    })
    res.send("subscirbed successfully!")
});

const router = express.Router();

app.listen(5000, function(){
    console.log("Server is running on port 5000")
})


