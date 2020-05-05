const app = require('./app');

function start() {
	app.listen(app.get('port'), () => {
		console.log('listen on port: ' + app.get('port'))
	});
}

start();