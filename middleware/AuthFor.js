module.exports = AuthFor = function() {
  var roles = arguments;
  return function(req, res, next) {
    flag = false;
    const loggedType = req.body.payload.type;
    for (var i = 0, j = roles.length; i < j; i++) {
      if (roles[i] == loggedType) {
        flag = true;
      }
    }
    if (flag == false) return res.status(404).send("Not Authorized");
    next();
  };
};
