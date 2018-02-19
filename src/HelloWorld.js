import React, {Component} from 'react';
import './style/HelloWorld.css';
import Header from './Header';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';

class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		var imgUrl = './lips.png';
		var logoStyle = {
			backgroundSize: '150px',
		}
		return(
			<div>
				<div className="About">
					<h2> Hello & Welcome </h2>
					<p>
						We're a few college students from Penn State
						University sharing stories that we can all relate to.
						In the midst of Bildungsroman, which means "coming of age"
						in Latin, we find ourselves tangled in provocative, comic,
						weird, and hilarious scenarios. Give our podcast a listen to
						hear some of the things your peers have gone through too.
					</p>
				</div>
				<div className="Logo" style={logoStyle}>
					<img src={imgUrl} />
				</div>
			 </div>
		);
	}
}

export default HelloWorld;

