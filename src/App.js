import React from 'react';
import HelloWorld from './HelloWorld';
import PodcastPage from './PodcastPage';
import Header from './Header';
import Contact from './Contact';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';

const App = () =>  (
	<Router>
	<div>
		<div className="App">
			<Header />
		</div>
		<div className="NavBar">
			<p>
			<Link to="/"> Home </Link> {'   '}

			<Link to={{pathname: '/podcast'}}> Podcast </Link>{'   '}

			<Link to='/Contact'> Contact </Link>
			</p>
		</div>
		<Switch>
			<Route exact path="/" component={HelloWorld} />
			<Route exact path="/podcast" component={PodcastPage} />
			<Route
				path="/contact" component={Contact}/>
		</Switch>
		</div>
	</Router>
);

export default App;