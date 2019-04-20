const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const router = express.Router()

// Require Router Handlers
const user = require('./routes/api/externalPortal');
const externalPortal = require('./routes/api/externalPortal');
const admin = require('./routes/api/admin');
const internalPortal = require('./routes/api/internalPortal');
const investor = require('./routes/api/investor');
const lawyer = require('./routes/api/lawyer');

const reviewer = require('./routes/api/reviewer');
const typesEnum = require('./enums/accountType').accountTypes;
const login = require('./routes/api/login');
const passport = require('passport');
const cors = require('cors');
const getPayload = require('./middleware/getPayload');
const AuthFor = require('./middleware/AuthFor');
const app = express();

// DB Config
const db = require('./config/key').mongoURI;

// Connect to mongo
mongoose
  //process.env.mongouri
  .connect(db)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));
// Init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('combined'));
app.use(getPayload);

// initiallize passport
//app.use(passport.initialize());

//require('./auth/auth')(passport);
// require('./config/passport')(passport);
// Entry point
app.get('/', (req, res) => res.send(`<h1>Person</h1>`));

// Direct to Route Handlers
// app.use("/api/user", user);
// app.use("/api/admin", admin);
// app.use("/api/externalPortal", externalPortal);
// app.use("/api/internalPortal", internalPortal);
// app.use("/api/investor", investor);
// app.use("/api/lawyer", lawyer);
// app.use("/api/reviewer", reviewer);
app.use('/api/externalPortal', externalPortal);

app.use(
  '/api/admin',
  admin
  // passport.authenticate('jwt', { session: false }),
  // AuthFor(typesEnum.ADMIN),
  // admin
);
app.use(
  '/api/internalPortal',
  passport.authenticate('jwt', { session: false }),
  AuthFor(typesEnum.REVIEWER, typesEnum.LAWYER, typesEnum.ADMIN),
  internalPortal
);
app.use(
  '/api/investor',
  passport.authenticate('jwt', { session: false }),
  AuthFor(typesEnum.INVESTOR),
  investor
);
app.use(
  '/api/lawyer',
  passport.authenticate('jwt', { session: false }),
  AuthFor(typesEnum.LAWYER),
  lawyer
);

app.use(
  '/api/reviewer',
  passport.authenticate('jwt', { session: false }),

  AuthFor(typesEnum.REVIEWER),
  reviewer
);
app.use('/api/login', login);
app.use((req, res) =>
  res.status(404).send(`<h1>Can not find what you're looking for</h1>`)
);

let port = process.env.PORT;
if (port == null || port == '') {
  // @ts-ignore
  port = 5000;
}

app.listen(port);
