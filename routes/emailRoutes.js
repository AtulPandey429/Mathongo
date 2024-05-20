const express = require('express');
const { sendEmails, unsubscribeUser } = require('../controllers/emailController');

const router = express.Router();

router.post('/:listId/send', sendEmails);
router.post('/unsubscribe/:email', unsubscribeUser);

module.exports = router;
