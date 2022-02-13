const { createProxyMiddleware } = require('http-proxy-middleware');

const serverPort = process.env.SERVER_PORT;

module.exports = function (app) {
    console.log('Proxy for express')
    console.log('port - ', serverPort)
    app.use(
        '/api/**',
        createProxyMiddleware({
            target: `http://localhost:${serverPort}`,
            changeOrigin: true,
            // router: ({ protocol, hostname}) => {
            //     `${protocol}://${hostname}:${serverPort}`
            // }
        })
    )
}