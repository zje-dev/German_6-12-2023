function main (cadena) {
    let cantidadO = 0
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "o" || cadena[i] == "O") {
            cantidadO += 1
        }
    }
    console.log("Se ha encontrado la letra o "+cantidadO+" veces")
}
main("Somos SENA")