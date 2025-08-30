//[Cualquier cadena]@[cualquier cadena].[cuaquier cadena de 2 de long en adelante]
let pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
let str = "correoprueba@example.com";

let res = pattern.exec(str);
if (res == null){
    console.log("Correo electrónico no válido.")
}else{
    console.log("Correo electrónico válido.")
}