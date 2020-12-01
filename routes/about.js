const express = require ('express')
const router = express.Router()

// about Route
router.get('/', (req, res) =>{
    res.render('about')
})



module.exports = router 