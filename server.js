require.paths.unshift('./node_modules')
var express = require('express')
  , app = express.createServer()


app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyDecoder());
    app.use(app.router);
    app.use(express.staticProvider(__dirname + '/public'));
})

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
    app.use(express.logger())
})

app.configure('production', function(){
    app.use(express.errorHandler());
})

app.get('/', function (req, res) {
    res.render('index.html.ejs')
})

app.get('/downloads', function (req, res) {
    res.render('downloads.html.ejs')
})

app.get('/license', function (req, res) {
    res.render('license.html.ejs')
})

app.get('/docs/:doc', function (req, res) {
    res.render(req.params.doc + '.ejs') 
})

app.listen(80)
