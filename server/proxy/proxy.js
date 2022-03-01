const { createProxyMiddleware } = require('http-proxy-middleware');

const serverPort = process.env.SERVER_PORT;

const proxyServer = createProxyMiddleware({
    target: `localhost:${serverPort}`,
    // pathRewrite: {
    //     '^/api/': '/',
    // },
    router: (req) => "http://localhost:8080",
    changeOrigin: true
});

module.exports = {proxyServer}