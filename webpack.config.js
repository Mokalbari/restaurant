const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true, // Compresse les fichiers servis
    port: 9000, // Port sur lequel votre serveur va écouter
    open: true, // Ouvre automatiquement le navigateur
    hot: true, // Active le Hot Module Replacement sans page reload
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
  plugins: [
    // Configuration du plugin HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      title: "Macabre Martini Mansion", // Vous pouvez spécifier un titre
      template: "./src/index.html", // Chemin vers le fichier template HTML
    }),
  ],
};
