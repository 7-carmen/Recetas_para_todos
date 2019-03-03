//Validación formulario: 


function comprobar() {
    var primerElemento = document.getElementById("nombre");
    var primerElementoError = document.getElementById("errorNombre");
    var segundoElemento = document.getElementById("apellidos");
    var segundoElementoError = document.getElementById("errorApellidos");
    var tercerElemento = document.getElementById("correo");
    var tercerElementoError = document.getElementById("errorCorreo");
    var cuartoElemento = document.getElementById("telefono");
    var cuartoElementoError = document.getElementById("errorTelefono");
    var quintoElemento = document.getElementById("descripcion");
    var quintoElementoError = document.getElementById("errorDescripcion");
    var is_valido = true;
if(primerElemento.value == "" || /\d/.test(primerElemento.value)) {
    primerElementoError.textContent = "El campo nombre esta vacio o contiene numeros";
    primerElemento.style.border="1px solid red";
    is_valido = false;
}else{
    primerElementoError.textContent = "";
    primerElemento.style.border="1px solid black";
}
if(segundoElemento.value == "" || /\d/.test(segundoElemento.value)){
    segundoElementoError.textContent = "El campo Apellidos esta vacio o contiene números";
    segundoElemento.style.border="1px solid red";
    is_valido = false;
}else{
    segundoElementoError.textContent = "";
    segundoElemento.style.border="1px solid black";
}

if(/^6[0-9]{8,8}/.test(cuartoElemento.value) == false){
    cuartoElementoError.textContent = "El número introducido no es valido";
    cuartoElemento.style.border="1px solid red";
    is_valido = false;
}else{
    cuartoElementoError.textContent = "";
    cuartoElemento.style.border="1px solid black";
}
if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(tercerElemento.value) == false){
    tercerElementoError.textContent = "El correo introducido no es valido";
    tercerElemento.style.border="1px solid red";
    is_valido = false;
}else{
    tercerElementoError.textContent = "";
    tercerElemento.style.border="1px solid black";
}

if(quintoElemento.value == "" ){
    quintoElementoError.textContent = "El campo descripción no debe estar vacio";
    quintoElemento.style.border="1px solid red";
    is_valido = false;
}else{
    quintoElementoError.textContent = "";
    quintoElemento.style.border="1px solid black";
}

    return is_valido;
}
