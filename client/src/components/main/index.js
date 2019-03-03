import React, { Component } from 'react'

import MainHeaderComponent from './main.header'
import MainTableComponent from './main.table'
import MainModalComponent from './main.modal'

class MainComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<div className="container">
				<MainHeaderComponent/>
				<MainTableComponent/>
				<MainModalComponent/>
			</div>
		)
	}
}

export default MainComponent