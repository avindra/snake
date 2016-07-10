const config = {
  entry: {
    app : ['./src/index.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
      },
    ],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      './src',
    ],
  },
};

module.exports = config;