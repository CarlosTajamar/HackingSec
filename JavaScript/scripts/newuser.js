function newuser(form) {
	registercode = new Array("907362", "432176");/* 1st code for admin, 2nd one for members code*/

	if(form.code.value == registercode[0]) {
		alert("Póngase en contacto con su administrador para recibir su nombre de usuario y contraseña de administrador. El nombre de usuario del sitio de miembros es 'members' y la contraseña es 'members'")/* When you enter admin code */
	}
	else if(form.code.value == registercode[1]) {
		alert("Nombre de usuario - 'anonimo', contraseña - 'anonimo'")/* Member username and password*/
	}
	else {
		alert("Código incorrecto. Vuelva a intentarlo o póngase en contacto con un administrador para obtener ayuda.")/* No such user */
	}
}