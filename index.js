// and here we go

// basic shit
var express = require('express'),
	ejs = require('ejs');

// configurations
// see http://stackoverflow.com/a/12008228
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.use(express.static('public'));


// routes
app.get(/^\/(|index|index\.html)$/, function(req, res) {
	res.render('index.html');
});

// finally
var port = process.env.PORT || 5000;
app.listen(port, function(err) {
	if (err) {
		console.err('Something went wrong.');
		console.err(JSON.stringify(err,null,4));
	} else {
		console.log("Listening on port "+port);
	}
});