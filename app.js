const express = require('express'),
    app = express(),
    port = 8080,
    http = require('http').Server(app);

app.use(express.static('public'));

http.listen(port, function() {
    console.log('listening on: ' + port);
});
