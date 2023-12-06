function main (cadena) {
    let cantidadPalabras = 1
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == " ") {
            cantidadPalabras += 1
        }
    }
    console.log("En la candena hay "+cantidadPalabras+" palabras")
}
main("Javascript es genial")