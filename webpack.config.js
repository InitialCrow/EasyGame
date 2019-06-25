const webpack = require('webpack') //to access built-in plugins
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		loadCoreModule : './client/js/core/loadCoreModule.js',
		loadModule : './client/js/loadModule.js',
		main:'./client/js/index.js',
	},
	output: {
    	filename: '[name].js',
    	path: __dirname + '/dist/js/'
  	},
	module: {
	  rules: [
	    {
	      test: /\.(js|jsx)$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env'],
	          plugins: ['@babel/plugin-proposal-object-rest-spread']
	        }
	      }
	    }
	  ]
	},
	plugins: [
		new CopyPlugin([

			{

				from: __dirname+'/client/index.html', to: __dirname+'/dist/index.html',

			},
			{
				from: __dirname+'/client/assets', to: __dirname+'/dist/assets',
			},


	    ]),
  	]
}