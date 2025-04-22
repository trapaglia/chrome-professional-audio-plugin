const path = require('path');

module.exports = {
  entry: {
    background: './src/background.ts',
    filters_interface: './src/filters_interface.ts',
    popup: './src/popup.js',
    compressor: './src/compressor.ts',
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
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
};
