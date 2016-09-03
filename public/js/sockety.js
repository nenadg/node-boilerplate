var sockety = (function(){

	var socket;

	var bind = function(a, f){
		return socket.on(a, f);
	};

	var emit = function(signal, data) {
		if(!socket)
			throw Error('Socket.io not loaded.');

		socket.emit(signal, data);
	};

	var load = function(callback){
		if(!io)
			throw Error('Socket.io not loaded.');
	
		socket = io.connect();
		
		socket.on('disconnected', function(){
			emit("disconnect");
		});

		socket.on('okay', function(id){
			callback(id);
		});
	};

	return {
		load: load,
		emit: emit,
		bind: bind
	};
})();