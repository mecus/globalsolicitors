const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const environment = require('./src/environment/env');


const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	// context: path.resolve(__dirname, 'app'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node-modules/
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
			   test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
					// options: {
					// 	attrs: [':data-src']
					// }
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json']
	},

	entry: {
		main: './src/main.ts',
		styles: './src/styles.scss'
		// materializeStyles: './src/assets/materialize/sass/materialize.scss'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		// new HtmlWebpackPlugin(),
		new CopyPlugin([
			{from: "src/index.html", to: path.resolve(__dirname, 'dist')}
		])
		// new ExtractTextPlugin('styles.css')
	],
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		hot: true, // for HotModuleReplacement
		// open: true,
		overlay: true,
		port: 3000
	},
	target: 'web',
	// mode: environment.production? 'production' : 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
