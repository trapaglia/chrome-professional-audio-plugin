const path = require('path');

module.exports = {
  entry: {
    background: './src/background.ts',
    filters_interface: './src/filters_interface.ts',
    popup: './src/popup.js',
    compressors: './src/compressors.ts',
    state_memory: './src/state_memory.ts',
    communications: './src/communications.ts',
    visualizer: './src/visualizer.ts',
    utils: './src/utils.ts',
    config: './src/config.ts',
    interface: './src/interface.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
};
