'use strict'

//EJERCICIO 1

// Ejemplo:
// placa=”ABC-2030”
// salida: 2030

let placa = "ABC-2030"
let position = placa.indexOf("-");
let num = placa.substring(position+1);
alert(num)


//EJERCICIO 2

// #Ejemplo:
// codigo: "01.24"
// salida: 01

let cod = "01.24";
alert(cod.substring(0, cod.indexOf(".")));

//EJERCICIO 3

// #Ejemplo:
// codigo: "2022-10"
// salida: 10

let fecha = "2022-10";
alert(fecha.substring(fecha.indexOf("-")+1));

//EJERCICIO 4

// #Ejemplo
// Entrada: MAGB-20
// Salida: MAGB

let entrada = "MAGB-20";
alert(entrada.substring(0, entrada.indexOf("-")));

//EJERCICIO 5

// #Ejemplo
// Entrada: nombredeuser@magbdigital.net
// salida: nombredeuser

let correo = "nombredeuser@magbdigital.net";
alert(correo.substring(0, correo.indexOf("@")));

//EJERCICIO 6

// #Ejemplo
// Entrada: facebook.com/nombreuser
// Salida: nombreuser

let url = "facebook.com/nombreuser";
alert(url.substring(url.indexOf("/")+1));

//EJERCICIO 7

// Entrada: https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link
// Salida: 1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1

let url1 = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link"
alert(url1.substring(url1.indexOf("d/")+2, url1.indexOf("/", 44)));


// EJERCICIO 8

// Entrada: LAB2#B
// Salida: C

let computadoraAsignada = "LAB2#B";
let letter = computadoraAsignada.indexOf("#")+1;
let codeAscii = computadoraAsignada.codePointAt(letter)+1;
alert(String.fromCodePoint(codeAscii));