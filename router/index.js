const express = require('express');
const router = express.Router();
const {SignUp, getUsers, login} = require('../controller/index')

router.post('/signup', SignUp)
router.get('/users', getUsers)
router.post('/login', login)

module.exports = router;