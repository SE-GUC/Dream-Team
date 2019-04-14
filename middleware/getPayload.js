const jwt = require("jsonwebtoken");
const tokenKey = require("../config/key").secretOrKey;

var getPayload = function(req, res, next) {
  const usertoken = req.headers.authorization;
  if (usertoken) {
    const token = usertoken.split(" ");
    const decoded = jwt.verify(token[1], tokenKey);
    req.payload = decoded;
  }
  next();
};

module.exports = getPayload;
