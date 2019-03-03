import immutable from 'immutable'
import {
	GET_BOOKS, 
	REMOVE_BOOK, 
	CHANGE_DATA_MODAL, 
	CHANGE_TYPE_MODAL, 
	TOGGLE_MODAL, 
	GET_BOOK, 
	CREATE_BOOK, 
	EDIT_BOOK, 
} from '../types'

let { 
	tableDataSelectors, 
	modalDataSelectors, 
	modalTypeSelectors, 
} = selectors

export const getBooks = () => dispatch => new Promise((resolve, reject) => {
	apiService.getBooks()
	.then(response => {
		let { data } = response
		dispatch({
			type: GET_BOOKS, 
			payload: { data: immutable.fromJS(data || []) }
		})
		resolve(GET_BOOKS)
	}, err => {
		console.log('err ',err)
		reject(GET_BOOKS)
	})
})

export const getBook = _id => dispatch => new Promise((resolve, reject) => {
	apiService.getBook(_id)
	.then(response => {
		let { data } = response
		dispatch({
			type: GET_BOOK, 
		})
		resolve(data[0])
	}, err => {
		console.log('err ',err)
		reject(GET_BOOK)
	})
})

export const removeBook = _id => (dispatch, getState) => new Promise((resolve, reject) => {
	apiService.removeBook(_id)
	.then(response => {
		let data = tableDataSelectors(getState())
		data = data.update(list => {
			list = list.map(item => {
				if(item.get('_id') == _id) {
					item = item.set('is_active', false)
				}
				return item
			})
			return list
		})
		dispatch({
			type: REMOVE_BOOK, 
			payload: { data }

		})
		resolve(REMOVE_BOOK)
	}, err => {
		console.log('err')
		reject(REMOVE_BOOK)
	})
})

export const changeDataModal = (key, value) => (dispatch, getState) => {
	let data = modalDataSelectors(getState())
	let { modal } = getState().book
	data = data.set(key, value)
	modal = modal.set('data', data)
	dispatch({
		type: CHANGE_DATA_MODAL, 
		payload: { modal }
	})
}

export const initDataModal = data => (dispatch, getState) => {
	let { modal } = getState().book
	modal = modal.set('data', immutable.fromJS(data))
	dispatch({
		type: CHANGE_DATA_MODAL, 
		payload: { modal }
	})
}

export const changeTypeModal = (type = 'create', toggle = true) => (dispatch, getState) => {
	let { modal } = getState().book
	modal = modal.set('type', type)
	dispatch({
		type: CHANGE_TYPE_MODAL, 
		payload: { modal }
	})
	dispatch(toggleModal(toggle))
}

export const toggleModal = (isActive = false) => (dispatch, getState) => {
	let { modal } = getState().book
	modal = modal.set('isActive', isActive)
	dispatch({
		type: TOGGLE_MODAL, 
		payload: { modal }
	})
}

export const submitModal = () => (dispatch, getState) => {
	let type = modalTypeSelectors(getState())
	switch(type) {
		case 'edit':
			dispatch(editBook())
			.then(() => {
				dispatch(toggleModal())
				dispatch(getBooks())
			})
		break
		default:
			dispatch(createBook())
			.then(() => {
				dispatch(toggleModal())
				dispatch(getBooks())
			})
		break
	}
}

export const createBook = () => (dispatch, getState) => new Promise((resolve, reject) => {
	let data = modalDataSelectors(getState())
	apiService.createBook(data.toJS())
	.then(response => {
		dispatch({
			type: CREATE_BOOK
		})
		resolve(CREATE_BOOK)
	}, err => {
		reject(CREATE_BOOK)
	})
})

export const editBook = () => (dispatch, getState) => new Promise((resolve, reject) => {
	let data = modalDataSelectors(getState())
	let _id = data.get('_id')
	let obj = {
		_id: data.get('_id'), 
		update: data.toJS()
	}
	apiService.editBook(obj)
	.then(response => {
		dispatch({
			type: EDIT_BOOK
		})
		resolve(EDIT_BOOK)
	}, err => {
		reject(EDIT_BOOK)
	})
})