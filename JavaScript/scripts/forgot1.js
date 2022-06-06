function password(form) {
	username = new Array("admin1", "admin2", "members");

	if(form.userid.value == username[0]) {
		alert("Las contraseñas de administrador no se pueden restablecer. Póngase en contacto con su administrador para recuperar su contraseña")/* Admin */
	}
	else if(form.userid.value == username[1]) {
		alert("Las contraseñas de administrador no se pueden restablecer. Póngase en contacto con su administrador para recuperar su contraseña")/* Admin */
	}
	else if(form.userid.value == username[2]) {
		location.replace('find-account.html')/* Members reset password */
	}
	else {
		alert("No se encontró tal usuario")
	}
}