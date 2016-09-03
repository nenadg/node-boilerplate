window.addEventListener('load', function(){
	
	// plain old vanilla js
	var hello = document.createElement('div');
	hello.id = 'hello';
	hello.innerText = 'Okay.';
	document.body.appendChild(hello);

	// load socket
	sockety.load(function(id){
		hello.innerText += ' socket id ' + id;
	});
});