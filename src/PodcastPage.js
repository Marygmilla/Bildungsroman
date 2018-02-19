import React, {Component} from 'react';
import './style/PodcastPage.css';
import HelloWorld from './HelloWorld';
import Client from './Client';

class PodcastPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			podcasts: []
		};
	}

	componentDidMount() {
		Client.search((podcasts) => {
			this.setState({
				podcasts: podcasts
			});
		});
	}

	handleQuery = e => {
		Client.search((podcasts) => {
			this.setState({
				podcasts: podcasts
			});
		});
	};

	render() {
		const {podcasts} = this.state;

		const podcastRows = podcasts.map(podcast => (
			<tr key={podcast.id}>
				<td> {podcast.title} </td>
				<td> {podcast.length} </td>
				<td colspan="25"> {podcast.description} </td>
			</tr>
		));

		return (
			<div>
				<div style={this.props.style} className="Podcast">
					<table className="podcastsDisplay">
						<thead>
							<tr>
								<th> Title </th>
								<th> Length </th>
								<th> Description </th>
							</tr>
						</thead>
						<tbody>
							{podcastRows}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default PodcastPage;