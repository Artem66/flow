const Hapi = require('hapi');
const Inert = require('inert');
const dotenv = require('dotenv');

dotenv.load();

const PORT = process.env.PORT || 5000;

const server = new Hapi.Server();

server.connection({ port: PORT });

// Hapi Plugins
const hapiPlugins = [Inert];

if (process.env.NODE_ENV === 'development') {
    const Webpack = require('webpack');
    const WebpackPlugin = require('hapi-webpack-plugin');

    const devConfig = require('./webpack.config.development');
    const compiler = new Webpack(devConfig);

    hapiPlugins.push({
        register: WebpackPlugin,
        options: {
            compiler,
            assets: devConfig.assets
        },
        hot: {}
    });
}

server.register(hapiPlugins, (error) => {
    if (error) throw error;

    server.route([{
        method: 'GET',
        path: '/{param*}',
        handler: (req, reply) => reply(`
            <html>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <div id="root"></div>
                <script src="build/main.bundle.js"></script>
              </body>
            </html>
        `)
    }]);

    return server.start((err) => {
        if (err) throw err;
    });
});
