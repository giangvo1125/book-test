var config = {
	development: {
		port: 2018,
		domain: 'localhost',
		apiUrl: 'http://localhost:2019/', 
	},
	production: {
		port: 2018,
		domain: 'localhost',
		apiUrl: 'http://localhost:2019/', 
	},
	
}
const env = process.env.NODE_ENV || 'development'

module.exports = config[env];
