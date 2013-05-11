swarm-host
==========

A realtime redis dashboard for your redis setup.

<img src="https://raw.github.com/emre/swarm-host/master/assets/shost1.png">

installation 
==========
```
git clone https://github.com/emre/swarm-host.git
cd swarm-host/swarm-host
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

running
==============
``` 
$ node app.js
   info  - socket.io started
Listening on port 3000
``` 
