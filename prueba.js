//EJERCICIO 7

// Entrada: https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link
// Salida: 1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1

let url1 = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link"
alert(url1.substring(url1.indexOf("d/")+2, url1.indexOf("/", 32)));
