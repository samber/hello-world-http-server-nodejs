const express = require('express')
const app = express()
const port = parseInt(process.env.PORT) || 8080;
const name = parseInt(process.env.NAME) || "fail";

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Hello ' + name))

app.listen(port, () => console.log('Example app listening on port ' + port))
