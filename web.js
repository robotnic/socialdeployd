


var deployd = require('deployd');

// on heroku must use port from env
var port = process.env.PORT || 3000;

var url = require('url');
var db_url = url.parse( process.env.MONGOHQ_URL || "mongodb://:@localhost:27017/tester");
//var db_url=url.parse("mongodb://fhmeta:fhmeta@oceanic.mongohq.com:10031/fhmeta");

var options = {
    port: port,
    env: 'staging',
    db: {
        "host": db_url.hostname,
        "port": parseInt(db_url.port),
        "name": db_url.pathname.slice(1),
        "credentials": {
            "username": db_url.auth.split(':')[0],
            "password": db_url.auth.split(':')[1]
        }
    }
};

var server = deployd(options);
server.listen();

server.on('listening', function() {
  console.log("Server is listening on " + port);
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});
