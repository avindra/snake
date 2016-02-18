const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
       path: __dirname + '/dist',
       filename: 'app.js'
   },
   module: {
       loaders: [
           {
             test: /\.js$/,
             loaders : [ 'babel' ]
           }
       ]
   },
   resolve : {
     modulesDirectories : [
       'node_modules',
       './src'
     ]
   }
};