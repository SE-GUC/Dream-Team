const express = require('express')
const mongoose = require('mongoose')
//const router = express.Router()

// Require Router Handlers

const reviewer = require('./routes/api/reviewer')
const Admin = require('./routes/api/admin')
const Investor = require('./routes/api/investor')
const Laywer = require('./routes/api/lawyer')
const form = require('./routes/api/form')
const lawyer_form = require('./routes/api/lawyer_form')
const reviewer_form = require('./routes/api/reviewer_form')
const company = require('./routes/api/company')


const app = express()

// DB Config
const db = require('./config/key').mongoURI

// Connect to mongo
mongoose
    .connect('mongodb+srv://dreamteam:dreamteampass@dreamteamdb19-dfqo6.mongodb.net/SumergeDB')
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
//Collapse



