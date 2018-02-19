const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var port = process.env.API_PORT || 8080;
//now we should configure the API to use bodyParser and look for
//JSON data in the request body

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:

app.get('/api', function(req, res) {
	res.json({message: 'HERE IS THE API'});
});

app.get('/api/podcasts', function(req, res) {
	//do query
	res.json([
	    {id: '1',
		title: 'Episode 1',
		length: 15, description:
		'blah blah blah'},
		{id: '2',
		title: 'Episode 2',
		length: 15,
		description: 'blah blah blah'},
		{id: '3',
		 title: 'Episode 3',
		 length: 15,
		 description: 'blah blah blah'
		},
		{id: '4',
		 title: 'Episode 4',
		 length: 15,
		 description: 'blah blah blah'
		}
		]);
});

//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port ${port}');
});
