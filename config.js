var express = require('express');
var app = express.createServer()
  
app.configure(function(){
    app.use(express.methodOverride())
    app.use(express.bodyParser())
    app.use(app.router)
    app.use(express.static(__dirname + '/public'))
})

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
    app.use(express.logger())
})

app.configure('production', function(){
    app.use(express.errorHandler());
})

exports.app = app;
