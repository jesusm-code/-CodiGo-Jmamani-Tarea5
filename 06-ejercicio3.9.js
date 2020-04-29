// 3.9 Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
// amplia (A) y daños a terceros (B). Para el plan A, la cuota
// base es de $1,200, y para el B, de $950. A ambos planes se les carga
// 10% del costo si la persona que conduce tiene por hábito beber alcohol,
// 5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
// cardiaca o diabetes–, y si tiene más de 40 años, se le carga
// 20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
// el costo base. Realice diagrama de flujo y diagrama N/S que represente
// el algoritmo para determinar cuánto le cuesta a una persona
// contratar una póliza.
let cobertura = +prompt("ingrese la cobertura 1)Plan A y 2) Plan B");
let alcohol_ = prompt("Consume alcohol? escribir y/n");
let lentes_ = prompt("Usa lentes? escribir y/n");
let enfermedad_ = prompt("Tiene alguna enfermedad? escribir y/n");
let edad_ = prompt("Ingrese su edad:");
let alcohol = 0;
let lentes = 0;
let enfermedad = 0;
let edad = 0;

if (alcohol_ =="y"){
        alcohol = 0.1
}else{alcohol=0}

if (lentes_ ==="y"){
    lentes = 0.05
}else{lentes=0}

if (enfermedad_ ==="y"){
    enfermedad = 0.05
}else{enfermedad=0}

if (edad_ >= 40){
    edad = 0.2
}else{edad=0.1}

if (cobertura === 1){
    precioBase = 1200
}else{precioBase = 950}

costo = precioBase + precioBase*(alcohol + lentes + enfermedad + edad);
console.log(`El costo se ${costo}`);
