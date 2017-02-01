const Hapi = require('hapi');
const Inert = require('inert');

const PORT = process.env.PORT || 5000;

var server = new Hapi.Server();

server.connection({ port: PORT });

// Hapi Plugins
const hapiPlugins = [Inert];

server.register(hapiPlugins, (error) => {
    if (error) throw error;

    server.route([{
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    }]);

    return server.start((err) => {
        if (err) throw err;
    });
})