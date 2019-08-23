var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/cloudfront', function(req, res) {
  res.render('cloudfront');
});

app.get('/level3', function(req, res) {
  res.render('level3');
});

app.get('/test', function(req, res) {
  res.render('test');
});

 var port = (process.env.PORT || 8080);
app.listen(port, function() {
 console.log('Node app is running on port: '+ port);
});



