function check(form) {
    username = new Array("carlos", "emilio", "anonimo");
    password = new Array("carlos", "emilio", "anonimo");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('../../Paginas/index.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('../../Paginas/index.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Contraseña incorrecta")
	}
	else {
		alert("Nombre de usuario o contraseña incorrecta")
	}
}