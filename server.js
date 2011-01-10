var app = require('./config').app

app.get('/', function (req, res) {
    res.render('index.html.ejs')
})

app.get('/downloads', function (req, res) {
    res.render('downloads.html.ejs')
})

app.get('/license', function (req, res) {
    res.render('license.html.ejs')
})

app.get('/docs/:doc?', function (req, res) {
   var doc = req.params.doc || 'index'
   res.render('docs/' + doc + '.ejs')
})

app.listen(80)
