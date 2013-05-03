
/*
 * GET home page.
 */

var redis = require("redis");
var config = require('../config');


var index = function(req, res){
	
	servers = [];
	template_data = {};

	for (var index in config.REDIS_SERVERS) {
		servers.push({
			'server_key': config.REDIS_SERVERS[index].host + "-" + config.REDIS_SERVERS[index].port
		});
	}

	template_data['stats'] = servers;

	res.render('index', template_data);
};

exports.index = index;