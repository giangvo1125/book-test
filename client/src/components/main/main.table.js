import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
	getBooks, 
	removeBook, 
	changeTypeModal, 
	getBook, 
	initDataModal, 
} from '../../actions/book_actions'

let {
	languageSelectors, 
	tableKeySelectors, 
	tableDataSelectors, 
} = selectors

class MainTableComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
		this.props.getBooks()
	}
	_renderHeaderTable(headers) {
		let { language } = this.props || {}
		let elements = headers.map(item => {
			let key = `header-${item.get('key')}`
			return (
				<th key={key} className={item.get('classTh')}>
					{language.get(item.get('key'))}
				</th>
			)
		})
		return elements
	}
	_onRemoveBook(_id) {
		this.props.removeBook(_id)
	}
	_onEditBook(_id) {
		this.props.getBook(_id)
		.then(book => {
			this.props.initDataModal(book)
			this.props.changeTypeModal('edit')
		})
	}
	_renderDataTable(tableKey, data) {
		let elements = data.map(iD => {
			if(iD.get('is_active') == true) {
				let key = `table-data-${iD.get('_id')}`
				let list_data = tableKey.map(iK => {
					let subKey = `${key}-${iK.get('key')}`
					if(iK.get('key') == 'actions') {
						return (
							<td key={subKey} className="cell-action">
								<a className="delete" onClick={this._onRemoveBook.bind(this, iD.get('_id'))}>
									<i className="ti-close"></i>
								</a>
								<a className="update" onClick={this._onEditBook.bind(this, iD.get('_id'))}>
									<i className="ti-pencil"></i>
								</a>
							</td>
						)
					}
					else {
						return (
							<td key={subKey} className={iK.get('classTd')}>
								{iD.get(iK.get('key'))}
							</td>
						)
					}
				})
				return (
					<tr key={key}>
						{list_data}
					</tr>
				)
			}
		})
		return elements
	}
	render() {
		let { 
			language, 
			tableKey, 
			data 
		} = this.props || {}
		let list_data = this._renderDataTable(tableKey, data)
		return (
			<div className="table-container">
				<table className="table">
					<thead>
						<tr>
							{this._renderHeaderTable(tableKey)}
						</tr>
					</thead>
					<tbody>
						{list_data}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		language: languageSelectors(state), 
		tableKey: tableKeySelectors(state), 
		data: tableDataSelectors(state), 
	}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    	getBooks, 
    	removeBook, 
    	changeTypeModal, 
    	getBook, 
    	initDataModal, 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTableComponent)