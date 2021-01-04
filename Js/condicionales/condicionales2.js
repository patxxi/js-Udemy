const metodoPago = "efectivo";

//Usar if cuando sea una condicion a cumplirse y emplear switch case cuando una variable pueda tener ciertos valores especificos

switch (metodoPago) {
	case "efectivo":
		console.log("Pagaste con efectivo");
		break;

	default:
		console.log("Aun no has seleccionado un metodo de pago valido");
		break;
}
