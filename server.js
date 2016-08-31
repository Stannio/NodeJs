var express = require('express');
var app = express();

var PORT = 80

app.listen(PORT, function () {
    console.log('Started listening on ' + PORT)
})

app.use(express.static('public'))
