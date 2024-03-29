// if (process.env.NODE_ENV !== 'production'){
//     require ('dotenv').parse()
// }

require ('dotenv').config()  

const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')
const bcrypt = require('bcrypt') 

// const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')
const aboutRouter = require('./routes/about')

const contactusRouter = require('./routes/contactus')
const servicesRouter = require('./routes/services')
const bookappointmentRouter = require('./routes/bookappointment')
const appointmentRouter = require('./routes/bookappointment')



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
// db.on('error', error => console.error(error))
db.once('open', () => console.log('conneceted to mongoose'))
// console.log(process.env.DATABASE_URL)

app.use('/', homeRouter)
app.use('/home', homeRouter)
app.use('/about', aboutRouter)
app.use('/contactus', contactusRouter)
app.use('/bookappointment', bookappointmentRouter)
app.use('/services', servicesRouter)
app.use('/bookappointment', appointmentRouter)

 

app.listen(process.env.PORT || 5000) 