var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
        extensions: ['.js', '.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: "/node_modules/"
			}
		]
	}
}