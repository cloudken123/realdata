const express = require ('express')
const router = express.Router()

// about Route
router.get('/', (req, res) =>{
    res.render('contactus')
})



module.exports = router 