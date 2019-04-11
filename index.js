const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
//const router = express.Router()

// Require Router Handlers
const form = require("./routes/api/form");
const user = require("./routes/api/user");
const admin = require("./routes/api/admin");
const internalPortal = require("./routes/api/internalPortal");
const investor = require("./routes/api/investor");
const lawyer = require("./routes/api/lawyer");
const profile = require("./routes/api/profile");
const reviewer = require("./routes/api/reviewer");
const typesEnum = require("./enums/accountType").accountTypes;
const login = require("./routes/api/login");
const passport = require("passport");
const cors = require("cors");
const getPayload = require("./middleware/getPayload");
const AuthFor = require("./middleware/AuthFor");
const app = express();

// DB Config
const db = require("./config/key").mongoURI;

// Connect to mongo
mongoose
  //process.env.mongouri
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));
// Init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("combined"));
app.use(getPayload);

// initiallize passport
app.use(passport.initialize());

require("./auth/auth")(passport);
// require('./config/passport')(passport);
// Entry point
app.get("/", (req, res) => res.send(`<h1>Person</h1>`));

// Direct to Route Handlers
app.use("/api/user", passport.authenticate("jwt", { session: false }), user);
app.use("/api/form", passport.authenticate("jwt", { session: false }), form);
app.use(
  "/api/admin",
  passport.authenticate("jwt", { session: false }),
  AuthFor(typesEnum.ADMIN),
  admin
);
app.use(
  "/api/internalPortal",
  passport.authenticate("jwt", { session: false }),
  AuthFor(typesEnum.REVIEWER, typesEnum.LAWYER, typesEnum.ADMIN),
  internalPortal
);
app.use(
  "/api/investor",
  passport.authenticate("jwt", { session: false }),
  AuthFor(typesEnum.INVESTOR),
  investor
);
app.use(
  "/api/lawyer",
  passport.authenticate("jwt", { session: false }),
  AuthFor(typesEnum.LAWYER),
  lawyer
);
app.use(
  "/api/profile",
  passport.authenticate("jwt", { session: false }),
  AuthFor(
    typesEnum.ADMIN,
    typesEnum.INVESTOR,
    typesEnum.LAWYER,
    typesEnum.REVIEWER
  ),
  profile
);
app.use(
  "/api/reviewer",
  passport.authenticate("jwt", { session: false }),

  AuthFor(typesEnum.REVIEWER),
  reviewer
);
app.use("/api/login", login);
app.use((req, res) =>
  res.status(404).send(`<h1>Can not find what you're looking for</h1>`)
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

//Static file declaration
// app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
// if(process.env.NODE_ENV === 'production') {
// app.use(express.static(path.join(__dirname, 'client/build')));
//
// app.get('*', (req, res) => {
// res.sendfile(path.join(__dirname = 'client/build/index.html'));
// })
// }
//
//build mode
// app.get('*', (req, res) => {
// res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })

app.listen(port);
//Collapse
