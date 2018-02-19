import React, {Component} from 'react';
import './About.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


class About extends Component {
	render() {
		const show  = {
			border: '2px solid black',
			textAlign: 'center',
			display: this.state.display,
		    margin: 40,
		    padding: 20,
		    width: 300,
		    height: 150,
	    }

		return(
			<Router>
			<div style={show}> //{this.props.name}
				//youtube express and possible do routers instead
				<button onClick={this.handleClick}> {this.state.clicked ? <PodcastPage style={show}/> : 'NO'}</button>

				</div>
			</Router>
		);
	}
}

export default Genre;