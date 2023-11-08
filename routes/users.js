const express = require('express')
const router = express.Router();


const users = require('../users')

//users from json placeholser

router.get('/', (req, res) => {
    res.json(users)
})

//get single user
router.get('/:id', (req, res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id)))
})

module.exports = router;
