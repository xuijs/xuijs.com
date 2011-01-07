require.paths.unshift('./node_modules')
var express = require('express')
  , app = express.createServer()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(80)
