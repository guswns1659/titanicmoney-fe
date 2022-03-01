const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {proxyServer} = require("./proxy/proxy");

const app = express();


const port = process.env.SERVER_PORT;

// Remove cache
app.disable('etag');

// middleware setting
app.use(express.static(path.join(__dirname, '../build'))); // TODO(jack.comeback) : ?
app.use(cookieParser());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.send('ok');
})

app.post('/api/charge', (req, res) => {
    console.log('body - ', req.body)
    res.status(200).send({amount:Number(req.body.amount)})
})

app.use('/api/*', proxyServer)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
