swarm-host
==========

A realtime redis dashboard for your redis setup.

<img src="https://raw.github.com/emre/swarm-host/master/assets/shost1.png">

installation 
==========
```
git clone https://github.com/emre/swarm-host.git
cd swarm-host
npm install
```

configuration 
=================
* edit config.js with your redis setup.

``` javascript
REDIS_SERVERS = [
  {"host": 'localhost', "port":'6379'},
  {"host": 'localhost', "port":'6380'}
];
```

* edit /public/javascripts/socket.js if you use custom host & port.

running
==============
``` 
node app.js
``` 
