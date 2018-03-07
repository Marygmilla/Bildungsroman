import React, {Component} from 'react';
import './style/Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props)
		this.people = [
			{name: 'Lauren',
			 bio: 'blah blah blah',
			 image: './lips.png'
			},
			{name: 'Katie',
			 bio: 'blah blah blah',
			 image: './lips.png'
			},
			{
			 name: 'Grace',
			 bio: 'blah blah blah',
			 image: './lips.png'
			},
		];
	}

	render() {
		const listItems = this.people.map((person) =>
				<div className="person">
					 <img src={this.people.image}/>
			    </div>
		);

		return(
			<ul> {listItems} </ul>
		)
	}
}

export default Contact;