const express = require ('express')
const router = express.Router()
const bookappointment = require('../models/bookappointment')
const user = require('../models/user')
const signup = require('../models/signup')


router.get('/', (req, res) =>{
    res.render('bookappointment/index')
})

router.get('/appointment', (req, res) =>{
    res.render('bookappointment/appointment', {user:new user()})
})



module.exports = router 