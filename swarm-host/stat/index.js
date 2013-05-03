
var redis = require("redis")


function RedisInfo(server, io) {
    this.server = server;
    this.io = io;
    this.getConnection = function(callback) {
    	connection = redis.createClient(this.server.port,this.server.host,
    		{max_attempts: 1, connect_timeout:2}
    	);
    	callback(connection, this.server.host + "-" + this.server.port);
    } 
}

RedisInfo.prototype.trackStats = function () {
	var self = this;
	setInterval(function() {
		self.pushStatForServer(self.server);
	}, 5000);

}


RedisInfo.prototype.pushStatForServer = function(server) {
	
	var self = this;

	this.getConnection(function(redis_connection, server_key) {

		redis_connection.on("error", function(error) {
			// catch no-connectivity errors
		});

		redis_connection.info(function (error, response) {
			hash = {};
			redis_connection.server_info["status"] = 'up'
			redis_connection.server_info["screen_strategy"] = 'up'
			hash[server_key] = redis_connection.server_info

			if(error == null) {
				self.io.sockets.emit('stats', hash);

			} else {
				hash = {};
				hash[server_key] = {
					'status': 'down',
					'server_name': 	server_key,
					'connected_clients': 0,
					'used_memory human': '?',
					'screen_strategy': 'hidden',
				}

				self.io.sockets.emit('stats', hash)
			}

			redis_connection.end();
		});
	});

}

exports.redis_info = RedisInfo