import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeTypeModal } from '../../actions/book_actions'

let {
	languageSelectors
} = selectors

class MainHeaderComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	_onOpenModalCreate() {
		this.props.changeTypeModal()
	}
	render() {
		let { language } = this.props || {}
		return (
			<div className="filters">
				<h1>{language.get('header')}</h1>
				<div className="actions">
					<a className="add" onClick={this._onOpenModalCreate.bind(this)}>
						<i className="ti-plus"></i>
					</a>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		language: languageSelectors(state), 
	}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    	changeTypeModal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderComponent)