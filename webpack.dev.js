const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const remotes = {
    pigame: "caw_pi@http://localhost:5201/remoteEntry.js",
    snakegame: "caw_snakes_ladders@http://localhost:5200/remoteEntry.js",
};

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        port: 8080,
        historyApiFallback: true,
    },

    output: {
        publicPath: "http://localhost:8080/",
    },

    plugins: [
        new ModuleFederationPlugin({
          name: "caw_container",
          filename: "remoteEntry.js",
          remotes: remotes,
          exposes: {},
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
        new HtmlWebPackPlugin({
          template: "./src/index.html",
        }),
      ]
});