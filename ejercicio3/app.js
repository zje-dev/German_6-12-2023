function main (cadena) {
	for (let i = 0; i < cadena.length; i++) {
		if (cadena[i] == "e" || cadena[i] == "E") {
			console.log("El texto contiene la letra E")
			break
		}
	}
}
main("Somos SENA")