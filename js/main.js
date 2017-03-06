function traductor(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");

	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName('btn')[0];

	title.innerHTML ="Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";

}

traductor();


function mostrar(){
	var clssform = document.getElementsByClassName('form-control');
	var mostr = document.getElementById('mostrando');
	mostr.setAttribute('style', 'text-align:center;');
	mostr.innerHTML = "El correo ingresado es: " + clssform[0].value+"<br>"+
    				   "La contraseña ingresada es: " + clssform[1].value;

}




