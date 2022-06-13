function account(form) {
	aaaaa = new Array("carlos", "emilio", "anonimo", "name4", "name5", "name6", "name7", "name8", "name9");/* People's names who can reset members password */

	if(form.name.value == aaaaa[0]||form.name.value == aaaaa[1]||form.name.value == aaaaa[2]||form.name.value == aaaaa[3]||form.name.value == aaaaa[4]||form.name.value == aaaaa[5]||form.name.value == aaaaa[6]||form.name.value == aaaaa[7]||form.name.value == aaaaa[8]) {
		alert("La contraseña es 'anonimo'")/* Change this to your password */
	}
	else {
		alert("No existe tal usuario. Por favor envíe de nuevo ej. Nombre Apellido. Si aún tiene problemas, comuníquese con su administrador")
	}
}