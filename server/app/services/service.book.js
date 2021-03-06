var _ = require('lodash')
const models = require('../models')
const Book = models.book

//getBooks: service get all book active
const getBooks = () => {
	return new Promise((resolve, reject) => {
		Book.find({is_active: { "$in": ["true", true] }}, (err, books) => {
			if(err) {
				reject(err)
			}
			resolve(books)
		})
	})
}

//getBook: service get book by condition
const getBook = (condition = {}) => {
	return new Promise((resolve, reject) => {
		Book.find(condition, (err, books) => {
			if(err) {
				reject(err)
			}
			resolve(books)
		})
	})
}


//createBook: service create a new book and insert into DB.
const createBook = data => {
	return new Promise((resolve, reject) => {
		if(data.name) {
			let book = new Book()
		    book.name = data.name
		    book.description = data.description ? data.description : ''
		    book.save((err) => {
		        if (err)
		            reject(err)
		        resolve(book)
		    })
		}
		else {
			reject('require params')
		}
	})
}

//checkBook: service check book existed by id on DB.
const checkBook =  _id => {
	return new Promise((resolve, reject) => {
		Book.findById(_id, (err, book) => {
			if(err) {
				reject(err)
			}
			resolve(book)
		})
	})
} 

//editBook: service edit book
const editBook = data => {
	return new Promise((resolve, reject) => {
		let { _id, update } = data
		checkBook(_id)
		.then(book => {
			if(!_.isEmpty(update)) {
				for(let key in update) {
					book[key] = update[key]
				}
				book.save((err) => {
					if(err) {
						reject(err)
					}
					resolve(book)
				})
			}
			else { 
				resolve(book)
			}
		})
		.catch(err => {
			reject(err)
		})
	})
}

//removeBook: service disable book on DB.
const removeBook = _id => {
	return new Promise((resolve, reject) => {
		checkBook(_id)
		.then(book => {
			book.is_active = false
			book.save((err) => {
				if(err) {
					reject(err)
				}
				resolve(book)
			})
		})
		.catch(err => {
			reject(err)
		})
	})
}

module.exports = {
	getBooks, 
	createBook, 
	checkBook, 
	editBook, 
	removeBook,
	getBook, 
}