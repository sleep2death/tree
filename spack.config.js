const { config } = require("@swc/core/spack");
const path = require("path");
module.exports = config({
  entry: {
    bundle: path.join(__dirname, "views", "js", "index.mjs"),
  },
  output: {
    path: path.join(__dirname, "views", "dist"),
  },
  module: {},
});
