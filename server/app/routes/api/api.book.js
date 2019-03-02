let { 
	createBook, 
	editBook, 
	removeBook, 
	getBooks, 
	getBook, 
} = require('../../controllers/controller.book')

module.exports = (app) => {
    app.post('/api/create-book', createBook) // api create a new book
    app.post('/api/edit-book', editBook) // api edit a book by id 
    app.get('/api/remove-book', removeBook) // api disable a book
    app.get('/api/get-books', getBooks) // api get all books active
    app.get('/api/get-book', getBook) // api get book by id
}