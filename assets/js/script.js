// Creación de las clases identificadas en el diagrama de clases

// Clase Propietario
class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre    = nombre;
        this._direccion = direccion;
        this._telefono  = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es ${this._nombre}.  El domicilio es ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`;
    }

}

//Clase Animal
class Animal extends Propietario{
    constructor (nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return `El tipo de animal es un: ${this.tipo}`
    }
}

//Clase mascota
class Mascota extends Animal{
    constructor (nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad    = enfermedad;
    }

    get nombre() {
        return this._nombreMascota
    }

    set nombre (nombreMascota) {
        this._nombreMascota = nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad
    }

    set enfermedad(enfermedadMascota) {
        this._enfermedad = enfermedadMascota;
    }

    datosMascota() {
        console.log("datoMasc enf " + enfermedad);
        return `El tipo de animal es un ${this._tipo}, mientras que el nombre del animal es: ${this.nombre} y la enfermedad es ${this.enfermedad}`
    }
}


//Función de validación de los inputs para que no estén vacíos
const validar = (textos) => {
    infoCompleta = true;
    infoCompleta = !textos.some(function(e){
        return e == "";
    });
    if (!infoCompleta) { alert("Complete la información del formulario para continuar")} ;
    return infoCompleta;
}


//Función para agregar información al html
const agregarInfo = (mascota) => {
    let listado = document.querySelector("#resultado ul")
    let item = document.createElement("li")
    item.textContent = mascota.datosPropietario();
    listado.appendChild(item);
    console.log("+info", listado.innerHTML);

    item = document.createElement("li")
    item.textContent = mascota.datosMascota();
    listado.appendChild(item);
}




let botonEnviar     = document.querySelector("button");


botonEnviar.addEventListener("click", (e) => {

    e.preventDefault();

    
//Captura de infromación de los inputs
let arregloTextos = [];  // arreglo para facilitar el proceso de validación
let infoPropietario = document.getElementById("propietario");
    arregloTextos.push(infoPropietario.value);
let infoTelefono    = document.getElementById("telefono");
    arregloTextos.push(infoTelefono.value);
let infoDireccion   = document.getElementById("direccion");
    arregloTextos.push(infoDireccion.value);
let infoMascota     = document.getElementById("nombreMascota");
    arregloTextos.push(infoMascota.value);
let infoTipo        = document.getElementById("tipo");
let infoEnfermedad  = document.getElementById("enfermedad");
    arregloTextos.push(infoEnfermedad.value);
    console.log("infEnf ", infoEnfermedad.value);


    //Validación de cada input

    console.log("antes validacion");
    if (validar(arregloTextos)) {

        console.log("despues validacion");

        if (infoTipo.value == "perro") {
            let Perro = new Mascota(arregloTextos[0], arregloTextos[2], arregloTextos[1], infoTipo.value, arregloTextos[3], arregloTextos[4]);
            console.log("--", arregloTextos);
            console.log(Perro.datosMascota());
            agregarInfo(Perro)
        } 
        else if (infoTipo.value == "gato") {
            let Gato = new Mascota(arregloTextos[0], arregloTextos[2], arregloTextos[1], infoTipo.value, arregloTextos[3], arregloTextos[4]);
            agregarInfo(Gato);
        } else {
            let Conejo = new Mascota(arregloTextos[0], arregloTextos[2], arregloTextos[1], infoTipo.value, arregloTextos[3], arregloTextos[4]);
            agregarInfo(Conejo);
        }


        let arrayInput = document.getElementsByTagName("input");
        for(ii = 0; ii < arrayInput.length; ii++) {
            arrayInput[ii].value = "";
        }



    }



})

