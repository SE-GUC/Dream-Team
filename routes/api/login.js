const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const User = require("../../models/User");
const validator = require("../../validations/userValidations");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const typesEnum = require("../../enums/accountType");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const tokenKey = require("../../config/key").secretOrKey;
const passport = require("passport");
//here we login
router.post("/", async (req, res) => {
  //
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ email: "Email does not exist" });
    const match = bcrypt.compareSync(password, user.password);
    if (match) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.accountType
      };
      const token = jwt.sign(payload, tokenKey, { expiresIn: "2h" });
      res.json({ token: token });
      return res;
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
