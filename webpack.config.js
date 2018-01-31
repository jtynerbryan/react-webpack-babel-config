const webpack = require('webpack');
const path = require('path');

const config = {
    // specify entry point and location of ouput file(s)
    entry: path.resolve('src/index.js'),
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js'
    }
};

module.exports = config
