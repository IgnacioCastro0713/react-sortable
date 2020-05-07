const app = require('./app');

function start() {
	app.listen(4000, () => {
		console.log('listen on port: ' + app.get('port'))
	});
}

start();