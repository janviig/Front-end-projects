const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const cors = require("cors")
// const { hasSubscribers } = require("diagnostics_channel")

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

require('dotenv').config();
console.log(process.env.SENDGRID_API_KEY);
const sendMail = require('@sendgrid/mail');
sendMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/', (req, res) => {
    const email = req.body.email;
    const note = {
        to: email,
        from: "janviguptaaaa@gmail.com",
        subject: "subscribed!",
        text: "you have succesfully subscribed!",
    };

    sendMail.send(note).then(() => {
        console.log("successful");
    })
    res.send("subscirbed successfully!")
});

const router = express.Router();

app.listen(8003, function(){
    console.log("Server is running on port 8003")
})


