
var cant = document.getElementById("cantidad");
var pre = document.getElementById("precio");

function getOperacion() {
    var Importe_Compra = parseFloat(pre.value) * parseInt(cant.value);
    var Importe_Descuento = (Importe_Compra * 0.15).toFixed(2);
    var Importe_Pagar = Importe_Compra - Importe_Descuento;

    document.getElementById("resultados").value = "Importe de compra: " + Importe_Compra + "\n" +
                                                  "Importe de descuento: " + Importe_Descuento + "\n" +
                                                  "Importe a pagar: " + Importe_Pagar;
    return false;
}
