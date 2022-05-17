const path = require('path');

process.env.NODE_ENV = "development";

let Config = require('./webpack.config.js');

Config.devtool = 'cheap-module-source-map';
Config.mode = 'development';

Config.watch = true;

Config.devServer = {
	hot: true,
	open: true,
	static: {
		directory: path.resolve(__dirname, './'),
		publicPath: '/'
	}
};


module.exports = Config;