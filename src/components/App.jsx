import { IntroComponent } from './intro';
import React, { Component } from 'react';

export class AppComponent extends Component {
	render() {
		return (
			<div>
				<h1>App</h1>
				<IntroComponent />
			</div>
		);
	}
}
