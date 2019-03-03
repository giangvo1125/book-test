import { createSelector } from 'reselect'

export const languageSelectors = state => state.language.data
export const tableKeySelectors = state => state.book.tableKey
export const tableDataSelectors = state => state.book.data
export const modalTypeSelectors = state => state.book.modal.get('type')
export const modalDataSelectors = state => state.book.modal.get('data')
export const modalActiveSelectors = state => state.book.modal.get('isActive')
