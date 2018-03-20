class Herramienta {
    constructor(nombre, descripcion, reparaciones, garantia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.reparaciones = reparaciones;
        this.garantia = garantia;
    }
}

function funcionEjecutar() {
    let herramienta = new Herramienta("Destornillador", "Aprieta y afloja tornillos", 1 , 4);
    let herramienta2 = new Herramienta("Martillo", "Aporrear cosas", 0 , 10);
	let herramienta3 = new Herramienta("sierra","cortar cosas robustas", 1 , 0);
	let herramienta4 = new Herramienta("segueta","cortar cosas finas ", 4 , 2);
	let herramienta5 = new Herramienta("Martillo","Aporrear cosas", 2 , 1);

let listadoHerramientas = [herramienta, herramienta2, herramienta3, herramienta4, herramienta5];


let herramientaMostrar = listadoHerramientas.filter(x => x.garantia < 3).sort((x, y) => x.reparaciones - y.reparaciones).filter( x => x.reparaciones % 2 === 0).find( x => x.reparaciones === 0).map( x => x.nombre + "-" + x.descripcion);

}