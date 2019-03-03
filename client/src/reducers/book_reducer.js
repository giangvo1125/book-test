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

const initState = {
    data: immutable.fromJS([]), 
    tableKey: immutable.fromJS([
    	{
    		id: 1, 
    		key: 'index', 
    		classTh: 'cell-no', 
    		classTd: '', 
    		isDisabled: false, 
    	}, 
    	{
    		id: 2, 
    		key: '_id', 
    		classTh: 'cell-id', 
    		classTd: '', 
    		isDisabled: false, 
    	}, 
    	{
    		id: 3, 
    		key: 'name', 
    		classTh: '', 
    		classTd: '', 
    		isDisabled: false, 
    	}, 
    	{
    		id: 4, 
    		key: 'actions', 
    		classTh: 'cell-action', 
    		classTd: 'cell-action', 
    		isDisabled: false, 
    	}, 
    ]), 
    modal: immutable.fromJS({
    	type: 'create', 
    	isActive: false, 
    	data: {
    		name: '', 
    		description: '', 
    	}
    })
}

function reducer(state = initState, action) {
    switch(action.type) {
    	case GET_BOOKS:
    		return { ...state, ...action.payload }
    	case REMOVE_BOOK:
    		return { ...state, ...action.payload }
    	case CHANGE_DATA_MODAL:
    		return { ...state, ...action.payload }
    	case CHANGE_TYPE_MODAL:
    		return { ...state, ...action.payload }
    	case TOGGLE_MODAL:
    		return { ...state, ...action.payload }
    	case GET_BOOK:
    		return { ...state, ...action.payload }
    	case CREATE_BOOK:
    		return { ...state, ...action.payload }
    	case EDIT_BOOK:
    		return { ...state, ...action.payload }
        default:
            return state;
    
    }
    return state;
}

module.exports = reducer;
