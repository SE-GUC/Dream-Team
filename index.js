const express = require('express')
const mongoose = require('mongoose')
//const router = express.Router()

// Require Router Handlers
const form = require('./routes/api/form')
const user = require('./routes/api/user')
const admin = require('./routes/api/admin')
const internalPortal = require('./routes/api/internalPortal')
const investor = require('./routes/api/investor')
const lawyer = require('./routes/api/lawyer')
const profile = require('./routes/api/profile')
const reviewer = require('./routes/api/reviewer')

const login = require('./routes/api/login')
const passport=require('passport')
const cors = require('cors')
const app = express()

// DB Config
const db = require('./config/key').mongoURI

// Connect to mongo
mongoose
//process.env.mongouri
    .connect( db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
// initiallize passport
app.use(passport.initialize())

require('./config/passport')(passport);
// Entry point
app.get('/', (req,res) => res.send(`<h1>Person</h1>`))


// Direct to Route Handlers
app.use('/api/user', user)
app.use('/api/form',form)
app.use('/api/admin',admin)
app.use('/api/internalPortal',internalPortal)
app.use('/api/investor',investor)
app.use('/api/lawyer',lawyer)
app.use('/api/profile',profile)
app.use('/api/reviewer',reviewer)
app.use('/api/login',login)
app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
//Collapse


