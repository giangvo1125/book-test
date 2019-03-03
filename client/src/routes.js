import React from 'react'
import { Route, IndexRoute } from 'react-router'

//COMPONENT
import ContentComponent from './components/content'
import MainComponent from './components/main'
//END COMPONENT

const routes = (
  	<Route component={(ContentComponent)}>
    	<Route path='/'>
    		<IndexRoute component={MainComponent}/>
    	</Route>
  	</Route>
)

export default routes