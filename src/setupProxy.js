const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/api", {
    target: "http://childstar.test",
    changeOrigin: true,
    secure: false,
  }));
};
