const express = require('express');
const multer = require('multer');
const { addUsers } = require('../controllers/userController');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/:listId/users', upload.single('file'), addUsers);

module.exports = router;
