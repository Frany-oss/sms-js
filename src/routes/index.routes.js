const {Router} = require('express')
const router = Router();

const { indexController, postMessage, receiveMessage } = require('../controllers/index.controller');

// Main route
router.get('/', indexController);

// Send SMS
router.post('/send-sms', postMessage);

// Receive SMS
router.post('/sms', receiveMessage);

module.exports = router;   