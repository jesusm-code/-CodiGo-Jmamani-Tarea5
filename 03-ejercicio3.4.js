// 3.4 El dueño de un estacionamiento requiere un diagrama de flujo con
// el algoritmo que le permita determinar cuánto debe cobrar por el
// uso del estacionamiento a sus clientes. Las tarifas que se tienen son
// las siguientes:
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.
let cobro = 0;
let tarifa = 0;
let horas = +prompt("Ingrese las horas")
if (horas <= 2){
    tarifa = 5;   
}else if (horas > 2 && horas <= 5){
    tarifa = 4;  
}else if (horas > 5 && horas <= 10){
    tarifa = 3;  
}else if (horas > 10){
    tarifa = 2;  
}
cobro = tarifa * horas;
console.log(`Tarifa: ${tarifa} c/u`);
console.log(`Horas: ${horas}`);
console.log(`Monto a cobrar es: $ ${cobro}`);
