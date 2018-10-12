//Install express server
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
//TODO 
app.use(express.static(path.join(__dirname, '/dist/travelStoryClient')));
app.get('/*', function (req, res) {
  res.sendFile(express.static(path.join(__dirname + '/dist/travelStoryClient/index.html')));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

