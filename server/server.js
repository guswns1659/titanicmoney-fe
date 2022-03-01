const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {proxyServer} = require("./proxy/proxy");
const axios = require('axios')

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

// TODO(jack.comeback) : HPM 안쓰고 axios로 backend post 호출 성공
app.post('/api/charge', async (req, res) => {
    console.log('body - ', req.body)
    const response = await axios.post('http://localhost:8080/api/charge', req.body);
    console.log(response)
    res.status(200).send(response.data)
})

app.use('/api/*', proxyServer)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
