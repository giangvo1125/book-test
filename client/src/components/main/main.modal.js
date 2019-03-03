import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Modal from '../common/modal'

import { 
	changeDataModal, 
	changeTypeModal, 
	submitModal, 
} from '../../actions/book_actions'

let {
	languageSelectors, 
	modalDataSelectors, 
	modalActiveSelectors, 
} = selectors

class MainModalComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	_onChange(key, e) {
		let value = e.target.value
		this.props.changeDataModal(key, value)
	}
	_onCancel() {
		this.props.changeTypeModal('create', false)
	}
	_onSubmit() {
		let { data } = this.props || {}
		if(data.get('name')) {
			this.props.submitModal()
		}
	}
	render() {
		let { 
			language, 
			isActive, 
			data 
		} = this.props || {}

		return (
			<Modal active={isActive}>
				<div className="modal__header">
					<div className="title">{language.get('modal_header')}</div>
				</div>
				<div className="modal__body">
					<div className="form-group has-error">
						<label className="control-label">{language.get('name')}</label>
						<div className="input">
							<input 
								type="text" 
								className="form-control" 
								value={data.get('name') || ''}
								onChange={this._onChange.bind(this, 'name')}/>
						</div>
					</div>
					<div className="form-group margin-top-10">
						<label className="control-label">{language.get('description')}</label>
						<div className="input">
							<textarea 
								name="" 
								id="" 
								rows="3" 
								className="form-control" 
								value={data.get('description') || ''}
								onChange={this._onChange.bind(this, 'description')}></textarea>
						</div>
					</div>
				</div>
				<div className="modal__footer">
					<a 
						className="cancel" 
						onClick={this._onCancel.bind(this)}>
						{language.get('cancel')}
					</a>
					<a 
						className={`submit ${data.get('name') ? 'active' : ''}`}
						onClick={this._onSubmit.bind(this)}>
						{language.get('submit')}
					</a>
				</div>
			</Modal>
		)
	}
}

const mapStateToProps = state => {
	return {
		language: languageSelectors(state), 
		isActive: modalActiveSelectors(state), 
		data: modalDataSelectors(state), 
	}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    	changeDataModal, 
    	changeTypeModal, 
    	submitModal, 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainModalComponent)