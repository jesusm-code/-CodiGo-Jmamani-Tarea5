// 3.8 Cierta empresa proporciona un bono mensual a sus trabajadores, el
// cual puede ser por su antigüedad o bien por el monto de su sueldo
// (el que sea mayor), de la siguiente forma:
// Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
// 20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
// bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
// de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
// se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
// algoritmo correspondiente para calcular los dos tipos de bono, asignando
// el mayor, y represéntelo con un diagrama de flujo y pseudocódigo.
let bonoAntiguedad = 0;
let bonoSueldo = 0;
let bono = 0;
let porcentaje1 = 0;
let porcentaje2 = 0;
let antiguedad = +prompt("Ingrese años de antiguedad")
let sueldo =+prompt("Ingrese su sueldo")

if (antiguedad >= 2 && antiguedad < 5){
    porcentaje1 = 20;
}else if (antiguedad >= 5){
    porcentaje1 = 30;
}else{
    porcentaje1 = 0;
}
bonoAntiguedad = sueldo*porcentaje1/100

if(sueldo <= 1000){
    porcentaje2 = 25;
}else if (sueldo > 1000 && sueldo <= 3500){
    porcentaje2 = 15;
}else{
    porcentaje2 = 10;
}
bonoSueldo = sueldo*porcentaje2/100
if (bonoAntiguedad > bonoSueldo){
    bono = bonoAntiguedad;
}else{
    bono = bonoSueldo
}

console.log(`Tu Sueldo es: ${sueldo} Soles`);
console.log(`Bono por antiguedad: ${bonoAntiguedad} soles, ${porcentaje1}%`);
console.log(`Bono por sueldo: ${bonoSueldo} soles, ${porcentaje2}%`);
console.log(`Le corresponde un bono de: ${bono} soles`);

