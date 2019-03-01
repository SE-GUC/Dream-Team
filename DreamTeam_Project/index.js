const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers

const reviewer = require('./route/api/reviewer')
const Admin = require('./route/api/admin')
const Investor = require('./route/api/investor')
const Laywer = require('./route/api/lawyer')
const form = require('./route/api/from')
const lawyer_form = require('./route/api/lawyer_form')
const reviewer_form = require('./route/api/reviewer_form')
const company = require('./route/api/company')


const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect('db')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>Person</h1>`))


// Direct to Route Handlers

app.use('/api/reviewer', reviewer)
app.use('/api/admin',Admin)
app.use('/api/lawyer',Laywer)
app.use('/api/investor',Investor)
app.use('/api/form',form)
app.use('/api/lawyer_form',lawyer_form)
app.use('/api/reviewer_form',reviewer_form)
app.use('/api/company',company)






app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))
Collapse



