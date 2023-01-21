const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

async function sendMessage(body, phone) {
    try {
        const message = await client.messages.create({
            to: phone,
            from: '+12058835801',
            body: body
        });
        
        console.log(message)
        return message;

    } catch(err) {
        console.log(err);
    }

}

module.exports = { sendMessage };