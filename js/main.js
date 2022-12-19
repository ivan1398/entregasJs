//espacio para variables
fechaActual = new Date();
let clientePorPagar;
let nuevoPago;
let booleano;

let nombreUsuario = prompt("Bienvenido al sistema de inscripciones a cursos MEDU, ingrese su nombre por favor: ");
let entrada = prompt("Hola"+" "+nombreUsuario+"! "+"Ingrese 1 Para inscribirse en 'Curso introductorio eco dolor crónico' , Ingrese 2 Para inscribirse en 'Curso básico introductorio dolor y eco intervencionismo' Ingrese 3 Para inscribirse en 'XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica' o escriba ESC para salir: ");

//declaracion de las clases
class Curso  {
    constructor(nombre,modalidad,Tema,fechaInicio,fechaFin) {
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.Tema = Tema;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

};

class Tema {
    constructor(descripcion) {
        this.descripcion = descripcion;
    }

}

class Inscripcion  {
    constructor(Cliente, fecha){
        this.Cliente = Cliente;
        this.fecha = fecha;
    }
};

class medioPago {
    constructor(Cliente,numeroTarjeta,fecha,codSeguridad){
        this.Cliente = Cliente;
        this.numeroTarjeta = numeroTarjeta;
        this.fecha = fecha;
        this.codSeguridad = codSeguridad;
    }
};

class Cliente {
    constructor(nombre,otroNombre,apellido,pais,especialidad,dni,numeroTel,codPostal,medioDeConoc,tieneEcografo,puedeViajar){
        this.nombre = nombre;
        this.otroNombre = otroNombre;
        this.apellido = apellido;
        this.pais = pais;
        this.especialidad = especialidad;
        this.dni = dni;
        this.numeroTel = numeroTel;
        this.codPostal = codPostal;
        this.medioDeConoc = medioDeConoc;
        this.tieneEcografo = tieneEcografo;
        this.puedeViajar = puedeViajar;
    }
};

//declaracion de arrays
const cursos = [];
const clientes = [];
const pagos = [];

//instanciaciones de los temas
const temasCurso1 = new Tema("-Introducción a la anatomo fisiología y neurobioquímica del dolor-Clasificación de los dolores. Nociplasticidad -Dolor miofascial. Fascia -Eco intervencionismo en dolor crónico");

const temasCurso2 = new Tema("Primer módulo: -Introducción a la anatomo fisiología y neuro bioquímica del dolor: su importancia respecto a la exploración, diagnóstico y tratamiento de los síndromes de dolor. Casos clínicos. Segundo módulo: -Clasificación de los dolores. Nociplasticidad. Diferentes modelos de wind-up. Hiper expresión génica. Fenotipia de los síndromes de dolor. Dolor neuropático. Farmacología del dolor. Casos clínicos. Tercer módulo: -Dolor miofascial. Fascia: Importancia de su exploración. Papel en el dolor crónico. Disfunción somática.Sensibilización espinal segmentaria. Método de Fischer. Eco intervencionismo miofascial. Casos clínicos.Cuarto módulo: -Eco intervencionismo en dolor crónico. Manejo del ecógrafo: introducción. Diferentes transductores. Target  básicos por región. Imágenes básicas musculares, ligamentosas, nerviosas, plexuales y terminales. Vasos. Fascia. Ecodinamia. Casos clínicos");

const temasCurso3 = new Tema("Módulo 1: -Conociendo el ecógrafo -Medicina regenerativa: targets frecuentes por región bajo ecografía. -Dolor: algoritmos de inclusión de los procedimientos. Pacientes.-Tecnología en el consultorio Módulo 2: Región ecográfica 1 –Columna lumbo–sacra. Miembro inferior. Plexo lumbar y nervios terminales. Módulo 3: Región ecográfica 2 – Regiones del cuello y maxilofacial. Columna cervical. Plexo braquial en región supraclavicular Módulo 4: Región ecográfica 3 – Hombro, mano y codo. Plexo braquial. Bloqueos en miembro superior. Módulo 5: Región ecográfica 4 - Cadera, pelvis y región del muslo. Módulo 6: Región ecográfica 5 – Rodilla, regiones de la pierna, tobillo y pie. Módulo 7: Región ecográfica 6 -Columna torácica, pared de tórax ecográfica y pared de abdomen. Región paravertebral y espacio Intercostal.");

//instanciaciones de las clases curso
const curso1 = new Curso("Curso introductorio eco dolor crónico","Clases en vivo on-line",temasCurso1,new Date(2023,1,27),new Date(2023,02,06));

const curso2 = new Curso("Curso básico introductorio dolor y eco intervencionismo","Clases en vivo on-line",temasCurso2,2023-02-28,2023-03-07);

const curso3 = new Curso("XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica","Clases en vivo on-line",temasCurso3,new Date(2023,03,21),new Date(2023,06,03));

//pushear los cursos al array
cursos.push(curso1);
cursos.push(curso2);
cursos.push(curso3);

//llamada de la funcion
elegirCurso(entrada);

//definicion de funciones
function elegirCurso(entrada) {

    while (entrada != "ESC") {

        switch(entrada) {
            case "1":
                const cursoEncontrado1 = cursos.find((cursoBuscado) => cursoBuscado.nombre === "Curso introductorio eco dolor crónico");
                fechaInicioCurso1 = cursoEncontrado1.fechaInicio;
                if (chequearFechas(fechaInicioCurso1) == false) {
                    alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
                else if (chequearFechas(fechaInicioCurso1) == true) {
                    alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso: "+cursoEncontrado1.nombre);
                    archivarCliente(nombreUsuario);
                    despedirUsuario(nombreUsuario);
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }


            case "2":
                fechaIncioDolorCronico = new Date(2023,12,30);
                if (chequearFechas(fechaIncioDolorCronico) == false) {
                    alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
                else {
                    alert(+nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de dolor cronico: ");
                    abrirFormulario();
                    despedirUsuario(nombreUsuario);
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }

            case "3":
                fechaIncioAnesteciaLocal = new Date(2023,12,30);
                if (chequearFechas(fechaIncioAnesteciaLocal) == false) {
                    alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
                else {
                    alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de Anestecia local: ");
                    abrirFormulario();
                    despedirUsuario(nombreUsuario);
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }


            case "4":
                fechaInicioTratamientosArtroscopicos = new Date(2021,07,16);
                if (chequearFechas(fechaInicioTratamientosArtroscopicos) == false) {
                    alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
                else {
                    alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de tratamientos artroscopicos: ");
                    abrirFormulario();
                    despedirUsuario(nombreUsuario);
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }

            default:
                alert("Disculpe que no podamos ayudarlo! El curso que ingreso no se encuentra disponible momentaneamente");
                entrada = prompt("Escriba ESC para salir ");
                break;
            }
        }
    }


function evaluarNombre(nombre) {

    if (nombre == ""){
        alert("Usted no posee otros nombres");
    }
    else {
        alert("Su segundo nombre es: "+nombre);
    }
};

function despedirUsuario(nombreUsuario) {
    alert("Gracias por confiar en nosotros"+" "+nombreUsuario+" "+"le aseguramos que será una experiencia sumamente enriquecedora");
}

function chequearFechas(unaFecha) {
    if (unaFecha < fechaActual) {
        return false;
    }
    else {
        return true;
    }

};

function archivarCliente(nombreUsuario) {
    alert("A continuación le pediremos una serie de datos para poder inscribirlo al curso correctamente, por favor clickee en aceptar");
    nombre = nombreUsuario;
    let otroNombre = prompt("Si tiene otro nombre puede ingresarlo o presione enter para saltear este paso");
    let apellido = prompt("Ingrese su apellido: ");
    let pais = prompt("Ingrese su nacionalidad: ");
    let especialidad = prompt("Ingrese su especialidad en la medicina: ");
    let dni = prompt("Escriba su numero de documento de identidad: ");
    let numeroTel = prompt("Proporcionenos un numero de telefono para contactarnos con usted: ");
    let codPostal = prompt ("Ingrese su codigo postal: ");
    let medioDeConoc = prompt("Ingrese el medio mediante el cual nos ha conocido: ");
    let entradaEcografo = prompt("Ingrese 'sí' si usted posee un ecógrafo para trabajar, de lo contrario ingrese 'no'");
    if (devuelveBoolean(entradaEcografo)){
        tieneEcografo = true;
    } else {
        tieneEcografo = false;
    };
    let entradaViaje = prompt("Ingrese 'sí' si usted posee un ecógrafo para trabajar, de lo contrario ingrese 'no'");
    if (devuelveBoolean(entradaViaje)){
         puedeViajar = true;
    } else {
         puedeViajar = false;
    };
    clientePorPagar = new Cliente(nombre,otroNombre,apellido,pais,especialidad,dni,numeroTel,codPostal,medioDeConoc,tieneEcografo,puedeViajar);
    clientes.push(clientePorPagar);
    asignarPago(clientePorPagar);
};


function devuelveBoolean(entradaSiNo) {
    if(entradaSiNo == "sí"){
        return true;
    } else{
        return false;
    }

};

function asignarPago(clientePorPagar) {
    alert("Le pediremos a continuación una serie de datos para que pueda abonar el curso al cual acaba de inscribirse, por favor seleccione el botón aceptar");
    numeroTarjeta = prompt("Ingrese por favor el numero de tarjeta");
    fecha = new Date();
    codSeguridad = prompt("Ingrese por favor el codigo de seguridad de su tarjeta: ");
    nuevoPago = new medioPago(clientePorPagar,numeroTarjeta,fecha,codSeguridad);
    pagos.push(nuevoPago);
    mostrarDatos(clientePorPagar,nuevoPago);
};

function evaluarEcografo(booleano) {

    if (booleano == "true"){
        alert("Usted posee un ecógrafo propio para trabajar durante el curso");
    }
    else if (booleano == "false") {
        alert("Usted no posee un ecógrafo propio para trabajar durante el curso");
    }
};

function evaluarPuedeViajar(booleano) {
    if (booleano == "true"){
        alert("Usted podrá viajar en días acordados para rotar por nuestro centro en Argentina");
    }
    else if (booleano == "false") {
        alert("Usted no podrá viajar en días acordados para rotar por nuestro centro en Argentina");
    }  
};

function mostrarDatos(clientePorPagar,nuevoPago){
    alert("A continuacion le mostraremos los datos proporcionados para chequear su veracidad, por favor seleccione aceptar");
    alert("Su nombre de pila es: "+clientePorPagar.nombre);
    evaluarNombre(clientePorPagar.otroNombre);
    alert("Su apellido es: "+clientePorPagar.apellido);
    alert("Usted es de: "+clientePorPagar.pais);
    alert("Su especialidad en la medicina es: "+clientePorPagar.especialidad);
    alert("Su dni es: "+clientePorPagar.dni);
    alert("Su numero telefonico es: "+clientePorPagar.numeroTel);
    alert("El código postal de su país de origen es: "+clientePorPagar.codPostal);
    alert("Usted nos conoció mediante: "+clientePorPagar.medioDeConoc);
    evaluarEcografo(clientePorPagar.tieneEcografo);
    evaluarPuedeViajar(clientePorPagar.puedeViajar);
    //pago
    alert("El número de su tarjeta es: "+nuevoPago.numeroTarjeta);
    alert("El código de seguridad de su tarjeta es: "+nuevoPago.codSeguridad);
};

















