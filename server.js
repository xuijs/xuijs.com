var app = require('./config').app
,   port = process.env.PORT || 4000;


app.get('/', function (req, res) {
    res.render('index.html.ejs', {locals:{current:'index'}})
})

app.get('/downloads', function (req, res) {
    res.render('downloads.html.ejs', {locals:{current:'downloads' }})
})

app.get('/license', function (req, res) {
    res.render('license.html.ejs', {locals:{current:'license'}})
})

app.get('/tests', function (req, res) {
    res.render('test.html.ejs', {locals:{current:'tests'}})
})

app.get('/docs/:doc?', function (req, res) {
   var doc = req.params.doc || 'index'
   res.render('docs/' + doc + '.ejs', {locals:{type:'docs', current:doc}})
})

app.listen(port)
console.log('Listening on port ' + port)
