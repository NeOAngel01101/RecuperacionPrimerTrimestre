class Herramienta {
    constructor(nombre, descripcion, reparaciones, garantia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.reparaciones = reparaciones;
        this.garantia = garantia;
    }

    getHerramienta() {
        return `Se llama ${this.nombre}, descripcion : ${this.descripcion} y la garantia es de ${this.garantia} años.`;
    }

    getCalidad() {
        return this.garantia > 5 && this.reparaciones == 0 ?
            `Es una buena herramienta` : `Es una mierda,mejor compra otra`;
    }
}

function funcionEjecutar() {
    let herramienta = new Herramienta("Destornillador", "Aprieta y afloja tornillos", 1 , 4);
    let herramienta2 = new Herramienta("Martillo", "Aporrear cosas", 0 , 10);

    console.log(herramienta);
    console.log(herramienta.getHerramienta());
    console.log(herramienta.getCalidad());
    console.log("----------------------------");
    console.log(herramienta2);
    console.log(herramienta2.getHerramienta());
    console.log(herramienta2.getCalidad());

}