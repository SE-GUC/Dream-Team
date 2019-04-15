const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    proxy("/api", {
      target: "https://dream-team5597.herokuapp.com/",
      changeOrigin: true
    })
  );
};
