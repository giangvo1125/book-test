let { 
	createBook, 
	editBook, 
	removeBook, 
	getBooks, 
	getBook, 
} = require('../../controllers/controller.book')

module.exports = (app) => {
    app.post('/api/create-book', createBook)
    app.post('/api/edit-book', editBook)
    app.get('/api/remove-book', removeBook)
    app.get('/api/get-books', getBooks)
    app.get('/api/get-book', getBook)
}