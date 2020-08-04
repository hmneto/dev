// const path = require("path");
// const webpack = require('webpack');

// module.exports = {
//   entry: path.join(__dirname, "index.js"),
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname),
//   },
//   plugins: [
//     new webpack.EnvironmentPlugin({
//         NODE_ENV: 'production', // use 'development' unless process.env.NODE_ENV is defined
//         DEBUG: true
//       })
//   ],
// };

const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: env.NODE_ENV, // use 'development' unless process.env.NODE_ENV is defined
                DEBUG: false
              })
          ],
  };
};
