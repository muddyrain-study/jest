import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanPlugin, Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const config: Configuration & { devServer: DevServerConfiguration } = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    new CleanPlugin(),
  ],
  devServer: {
    port: 3000,
    open: true,
    compress: true,
  },
};

export default config;
