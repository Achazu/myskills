import { FormComponent } from './form';

import { IntroComponent } from './intro';

import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
export class AppComponent extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Route exact path='/' component={IntroComponent}/>
						<Route exact path='/user/:id' component={FormComponent}/>
					</div>
				</Router>				
			</div>
		);
	}
}
