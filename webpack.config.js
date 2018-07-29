const config = {
  entry: {
    app: ['./src/index.js'],
  },
  mode: process.env.NODE_ENV,
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      './src',
    ],
  },
};

module.exports = config;
