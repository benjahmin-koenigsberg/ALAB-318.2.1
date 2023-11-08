const express = require('express')
const router = express.Router();


let users = require('../users')

//users from json placeholser

router.get('/', (req, res) => {
    res.json(users)
})

//get single user
router.get('/:id', (req, res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id)))
})

//create members
router.post('/' , (req, res) => {
    const newUser = req.body
    newUser.status = 'active';
    newUser.timeJoined = Date.now().toLocaleString();
    users.push(newUser)
    res.json({msg: "User successfully created", users })

})


//update members
router.put('/:id', (req, res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id)))
})

//delete members
router.delete('/:id', (req, res) => {
    users = users.filter(user => user.id !== parseInt(req.params.id))
    //users.filter( user => user.id !== parseInt(req.params.id) )
    res.json(users)
})

module.exports = router;
