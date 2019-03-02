var { bookService } = require('../services')

module.exports = {
	createBook: (req, res, next) => {
		let body = req.body
		bookService.createBook(body)
		.then((data) => {
			return res.status(200).send(data)
		})
		.catch(err => {
			let msg = 'err'
			if(typeof err === 'string') msg = err
			return res.status(500).send(msg)
		})
	}, 

	editBook: (req, res, next) => {
		let body = req.body
		bookService.editBook(body)
		.then((data) => {
			return res.status(200).send(data)
		})
		.catch(err => {
			let msg = 'err'
			if(typeof err === 'string') msg = err
			return res.status(500).send(msg)
		})
	}, 

	removeBook: (req, res, next) => {
		let { _id } = req.query
		bookService.removeBook(_id)
		.then((data) => {
			return res.status(200).send(data)
		})
		.catch(err => {
			let msg = 'err'
			if(typeof err === 'string') msg = err
			return res.status(500).send(msg)
		})
	}, 

	getBooks: (req, res, next) => {
		bookService.getBooks()
		.then((data) => {
			return res.status(200).send(data)
		})
		.catch(err => {
			let msg = 'err'
			if(typeof err === 'string') msg = err
			return res.status(500).send(msg)
		})
	}, 

	getBook: (req, res, next) => {
		let { _id } = req.query
		bookService.getBook({ _id })
		.then((data) => {
			return res.status(200).send(data)
		})
		.catch(err => {
			let msg = 'err'
			if(typeof err === 'string') msg = err
			return res.status(500).send(msg)
		})
	}

}