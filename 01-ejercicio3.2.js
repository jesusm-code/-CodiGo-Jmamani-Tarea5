// 3.2 Realice un algoritmo para determinar el sueldo semanal de un trabajador
// con base en las horas trabajadas y el pago por hora, considerando que después 
// de las 40 horas cada hora se considera como
// excedente y se paga el doble. Construya el diagrama de flujo, el
// pseudocódigo y el diagrama N/S.
let PagoPorSemana = 0;
let costoHora = 10
let horasTrabajadas = +prompt("Ingrese horas trabajadas")

if (horasTrabajadas > 40){
    PagoPorSemana = 40*costoHora + (horasTrabajadas-40)*costoHora*2
}else{
    PagoPorSemana = costoHora*horasTrabajadas
}
console.log(`Costo por hora: ${costoHora} soles`);
console.log(`Horas trabajadas: ${horasTrabajadas}`);
console.log(`El sueldo por semana: ${PagoPorSemana} soles`);


