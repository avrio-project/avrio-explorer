var net = require('net');

var client = new net.Socket();
var init = false;
client.connect(17785, '127.0.0.1', function() {
	console.log('Connected to rpc');
	client.write('init');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	if (!init) {
		console.log("Not init, sending *");
		client.write('*');
		init = true;
	}
});

client.on('close', function() {
	console.log('rpc closed');
});
