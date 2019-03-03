import { HttpClient } from './http-client'

export const getBooks = () => {
	return HttpClient.withBookAPI().get(`get-books`)
}

export const getBook = _id => {
	return HttpClient.withBookAPI().get(`get-books?_id=${_id}`)
}

export const removeBook = (_id) => {
	return HttpClient.withBookAPI().get(`remove-book?_id=${_id}`)
}

export const createBook = data => {
	return HttpClient.withBookAPI().post(`create-book`, data)
}

export const editBook = data => {
	return HttpClient.withBookAPI().post(`edit-book`, data)
}