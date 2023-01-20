const config = require('../config');
const client = require('twilio')(config.accountSid, config.authToken);

async function sendMessage() {
    try {
        const message = await client.messages.create({
            to: config.phone,
            from: '+12058835801',
            body: 'My first message'
        });
        console.log(message.sid);
    }
    catch(err) {
        console.log(err);
    }

}

sendMessage();