var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

// Thiết lập đường dẫn chính xác cho thư mục views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('App running on http://localhost:' + port);
});
