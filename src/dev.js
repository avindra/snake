const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./../webpack.config.js');

const devPort = 8080;
const bindName = '0.0.0.0';

if (isDev) {
  config.entry.app.unshift(`webpack-dev-server/client?http://${bindName}:${devPort}/`);
  process.stdout.write(`Webpack is listening on ${devPort}`);
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, {});
  server.listen(devPort);
}
