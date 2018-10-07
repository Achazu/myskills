import react from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class IntroComponent extends Component {
	render(){
		return (
			<div>
				<h1>Hello World</h1>
				<Link to='/user/luk'>Profile</Link>
				
			</div>
		)
	}
}
