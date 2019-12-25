var http = require('http')
    ,app = require('./config/express');
var cors = require('cors');
app.use(cors());

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

