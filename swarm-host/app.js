
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , stat = require('./stat')
  , config = require('./config')
  , swig = require('./swigger').swig


var app = express();

 require('swig').init({ cache: true, allowErrors: false, filters: {} })


app.set('host', config.APP_HOST);
app.set('port', config.APP_PORT);
app.set('views', __dirname + '/views');

app.engine('html', swig);
app.set('view engine', 'html');
app.set('view options', { layout: false });

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);

server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Listening on port ' + app.get('port'));
});

io = require('socket.io').listen(server);

for (var index in config.REDIS_SERVERS) {
	box_stat = new stat.redis_info(config.REDIS_SERVERS[index], io)
	box_stat.trackStats()
}





