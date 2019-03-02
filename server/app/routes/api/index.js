var _ = require('lodash')
var book = require('./api.book')

module.exports = function(app) {
	var routes = {}
	_.extend(routes, book(app))
	return routes
}