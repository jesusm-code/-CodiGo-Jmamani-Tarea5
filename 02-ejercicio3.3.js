// 3.3 El 14 de febrero una persona desea comprarle un regalo al ser querido
// que más aprecia en ese momento, su dilema radica en qué regalo
// puede hacerle, las alternativas que tiene son las siguientes:
// Regalo          Costo
// Tarjeta         $10.00 o menos
// Chocolates      $11.00 a $100.00
// Flores          $101.00 a $250.00
// Anillo          Más de $251.00

// Se requiere un diagrama de flujo con el algoritmo que ayude a determinar
// qué regalo se le puede comprar a ese ser tan especial por el
// día del amor y la amistad.
let montoDinero = +prompt("Ingrese el monto de dinero");
let regalo = "";
if (montoDinero <= 10.00){
    regalo = "Tarjeta"
}else if (montoDinero >=11 && montoDinero <=100){
    regalo = "Chocolates"
}
else if (montoDinero >=101 && montoDinero <=250){
    regalo = "Flores"
}else if (montoDinero >=251){
    regalo = "anillo"
}
console.log(`Ud. puede regalar ${regalo}`);
