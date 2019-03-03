import React, { Component } from 'react'

class ModalComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		let { active } = this.props || {}
		let isActive = active == true ? 'active' : false
		return (
			<div className={`modal ${isActive}`}>
				<div className="modal__container">
					<div className="modal__dimmer"></div>
					<div className="modal__content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default ModalComponent