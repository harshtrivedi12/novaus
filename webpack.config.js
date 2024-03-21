module.exports = {
  // Other configuration...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Use the env preset
          },
        },
      },
      // Other loaders...
    ],
  },
  // Other configuration...
};
