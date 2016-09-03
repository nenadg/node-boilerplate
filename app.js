// datalove <3
// dependencies
var http           = require('http'),
    express        = require('express'),
    app            = express(),
    path           = require('path'),
    favicon        = require('serve-favicon'),
    logger         = require('morgan'),
    methodOverride = require('method-override'),
    session        = require('express-session'),
    bodyParser     = require('body-parser'),
    multer         = require('multer'),
    mongoose       = require('mongoose'),
    secret         = Math.random().toString(36).substring(3, 12);
    
// configuration
app.set('port', process.env.PORT || 3005);
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true, secret: secret }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false /*true*/ }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

/*mongoose.connect('mongodb://user:pass@localhost:27017/db');*/

app.get('*', function(res, req, next){
    res.header('X-XSS-Protection' ,  '1; mode=block');
    next(); 
});

var server  = http.createServer(app),
      io      = require('socket.io').listen(server, { log: false }),
      streamy = require('./private/streamy.js').start(io);

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});