const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

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

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
