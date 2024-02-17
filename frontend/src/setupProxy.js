const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      autoRewrite: true,  
      protocolRewrite: "http",
      cookieDomainRewrite: {
        '*': '100.94.71.87', // Change this to the appropriate IP address of your server
      }
    })
  );
};
