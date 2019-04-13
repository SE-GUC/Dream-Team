const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const tokenKey = require('../../config/key').secretOrKey;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Login
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ email: 'Email does not exist' });
    const match = bcrypt.compareSync(password, user.password);
    if (user.accountStatus == false) {
      //What to do ??????
    }
    if (match) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.accountType
      };
      const token = jwt.sign(payload, tokenKey, { expiresIn: '5h' });
      res.json({ token: `Bearer ${token}` });
      return res;
    } else return res.status(400).send({ password: 'Wrong password' });
  } catch (e) {}
});

module.exports = router;
