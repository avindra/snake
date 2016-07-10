const isDev = process.env.NODE_ENV == 'development';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


const config = require('./../webpack.config.js');

const devPort = 8080;

if(isDev) {
  config.entry.app.unshift(`webpack-dev-server/client?http://0.0.0.0:${ devPort }/`);
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, {});
  server.listen(devPort);
}