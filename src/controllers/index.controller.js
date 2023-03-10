const MessagingResponse = require('twilio').MessagingResponse;

const {sendMessage} = require('../twilio/send-sms');
const SMS = require('../models/sms');

const indexController = async (req, res) => {
    const messages = await SMS.find().lean();
    res.render('index', { messages });
};

const postMessage = async (req, res) => {

    const {message, phone} = req.body;
    if(!message || !phone) return res.json('Missing message or phone');

    const result = await sendMessage(req.body.message, req.body.phone);
    console.log(result.sid)

    await SMS.create({Body: req.body.message, To: req.body.phone });

    res.redirect('/');

};

const receiveMessage = async (req, res) => {

    console.log(req.body.Body);
    console.log(req.body.From);

    const savedSMS = await SMS.create({
        Body: req.body.Body,
        From: req.body.From
    })

    const twilml = new MessagingRespons();
    res.send(twilml.toString());
}

module.exports = {
    indexController,
    postMessage,
    receiveMessage
}