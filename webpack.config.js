const config = {
  entry: {
    app: ['./src/index.ts'],
  },
  mode: process.env.NODE_ENV,
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        loaders: ['babel-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      './src',
    ],
    extensions: [
      '.js',
      '.ts'
    ]
  },
};

module.exports = config;
