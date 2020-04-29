// 3.11 Se les dará un bono por antigüedad a los empleados de una tienda.
// Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
// sucesivamente hasta los 5 años. Para los que tengan más de 5, el
// bono será de $1000. Realice un algoritmo y represéntelo mediante
// el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
// determinar el bono que recibirá un trabajador.
let bono = 0;
let antiguedad = +prompt("Ingrese los alos de antiguedad")

switch (antiguedad){
    case 0:
        bono = 0;
        break;
    case 1:
        bono = 100;
        break;
    case 2:
        bono = 200;
        break;
    case 3:
        bono = 300;
        break;
    case 4:
        bono = 400;
        break;
    case 5:
        bono = 500;
        break;
    default:
        bono = 1000;
}
console.log(`Te corresponde un bono de ${bono} soles`);
