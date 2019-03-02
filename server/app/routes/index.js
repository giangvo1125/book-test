var _ = require('lodash')

var apiRoute = require('./api')

module.exports = function(app) {
	var routes = {}
	_.extend(routes, apiRoute(app))
	return routes
}
