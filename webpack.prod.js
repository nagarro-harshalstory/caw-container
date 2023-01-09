const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const remotes = {
    pigame: "caw_pi@https://nagarro-harshalstory.github.io/caw-pi/remoteEntry.js",
    snakegame: "caw_snakes_ladders@https://nagarro-harshalstory.github.io/caw-snakes-ladders/remoteEntry.js",
}

module.exports = merge(common, {
    mode: 'production',

    output: {
        publicPath: "https://nagarro-harshalstory.github.io/caw-container",
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
      ],
});