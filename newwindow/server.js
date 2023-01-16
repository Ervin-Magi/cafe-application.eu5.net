var express = require('express');
var app = express();

// Sain GET p.sivu
app.get('/', function (req, res) {
    console.log("Sain GET p.sivu");
    res.send('Hello GET');
})

// Sain POST arviointi2 p.sivu
app.post('/arviointi2', function (req, res) {
    console.log("Sain POST arviointi2 p.sivu");
    res.send('Arviointisi on 4');
})

// Sain DELETE /del_user
app.delete('/del_user', function (req, res) {
    console.log("Sain DELETE /del_user");
    res.send('Hello DELETE');
})

// Sain GET /tilaus
app.get('/process_get', function (req, res) {
    console.log("Sain GET /tilaus");
    res.send('Kiitos tilauksestasi. Tilaus saapuu teille 48 tunnin sisällä!');
})

// Sain POST /arviointisi
app.get('/arviointi2', function(req, res) {
    console.log("Sain POST /arviointisi2");
    res.send('Kiitos arvosanasta!');
})

// Sain GET /arviointi
app.get('/arviointi', function(req, res) {
    console.log("Sain GET /arviointi");
    res.send('Kiitos arvosanasta!');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Esimerkki sovelluksen kuuntelusta osoitteessa http://%s:%s", host, port)
})