
var redis = require("redis")


function RedisInfo(servers, io) {
    this.servers = servers;
    this.stats = [];
    this.io = io;
}


RedisInfo.prototype.trackStats = function () {

	var self = this;
	setInterval(function() {
		for (var index in self.servers) {
			self.getStatForServer(self.servers[index]);
		}
	}, 3000);

}

RedisInfo.prototype.getStatForServer = function(server) {
		
	var self = this;

	redis_connection = redis.createClient(server.port, server.host);

	redis_connection.info(function (error, response) {
		io.sockets.emit('stats', { server_data: redis_connection.server_info })
	});


	redis_connection.quit()
}

exports.redis_info = RedisInfo