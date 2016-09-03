var schema = require('./schema');

exports.start = function(io){
	var users = [];

	io.sockets.on("connection", function(socket) {

		if(users.indexOf(socket.id) === -1) {
			console.log('Socket connected for id ' + socket.id);
			users.push(socket.id);

			socket.emit('okay', socket.id);
		}

		socket.on("disconnect", function(o) {
			
			var index = users.indexOf(socket.id);

			if(index != -1) {
				console.log('Socket disconnected for id ' + socket.id);
				users.splice(index, 1);
			}
		});
	});
};