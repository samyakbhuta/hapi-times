var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);

// Define the route
var hello = {

    handler: function (request) {
        request.reply({ greeting: 'hello' + ' ' + request.query.name});
    },

    validate: {
      query: {
        name: Hapi.Types.String().required()
      }
    }

};

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    config: hello
});

// Start the server
server.start();
