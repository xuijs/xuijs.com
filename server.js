var app = require('./config').app
var port = process.env.PORT || 4000

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
   res.render('docs/' + doc + '.ejs', {
      locals: { type: 'docs' }
   })
})

app.listen(port)
console.log("listening on port " + port)
