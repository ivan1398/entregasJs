//espacio para variables
fechaActual = new Date();
let nombreUsuario = prompt("Bienvenido al sistema de inscripciones a cursos MEDU, ingrese su nombre por favor: ");
let entrada = prompt("Hola"+" "+nombreUsuario+"! "+"Ingrese 1 Para inscribirse en 'Curso introductorio eco dolor crónico' , Ingrese 2 Para inscribirse en 'Curso básico introductorio dolor y eco intervencionismo' Ingrese 3 Para inscribirse en 'XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica' o escriba ESC para salir: ");

//declaracion de las clases
class Cliente  {
    constructor(nombre,edad,pais,especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.especialidad = especialidad
    }
};

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

class Pago  {
    constructor(importe,fecha){
        this.importe = importe;
        this.fecha = fecha;
    }
};

class Formulario {
    constructor(dni,numeroTel,codPostal,medioDeConoc,tieneEcografo,puedeViajar){
        this.dni = dni;
        this.numeroTel = numeroTel;
        this.codPostal = codPostal;
        this.medioDeConoc = medioDeConoc;
        this.tieneEcografo = tieneEcografo;
        this.puedeViajar = puedeViajar;
    }
}

//declaracion de arrays
const cursos = [];
const clientes = [];

//instanciaciones de los temas
const temasCurso1 = new Tema("-Introducción a la anatomo fisiología y neurobioquímica del dolor-Clasificación de los dolores. Nociplasticidad -Dolor miofascial. Fascia -Eco intervencionismo en dolor crónico");

const temasCurso2 = new Tema("Primer módulo: -Introducción a la anatomo fisiología y neuro bioquímica del dolor: su importancia respecto a la exploración, diagnóstico y tratamiento de los síndromes de dolor. Casos clínicos. Segundo módulo: -Clasificación de los dolores. Nociplasticidad. Diferentes modelos de wind-up. Hiper expresión génica. Fenotipia de los síndromes de dolor. Dolor neuropático. Farmacología del dolor. Casos clínicos. Tercer módulo: -Dolor miofascial. Fascia: Importancia de su exploración. Papel en el dolor crónico. Disfunción somática.Sensibilización espinal segmentaria. Método de Fischer. Eco intervencionismo miofascial. Casos clínicos.Cuarto módulo: -Eco intervencionismo en dolor crónico. Manejo del ecógrafo: introducción. Diferentes transductores. Target  básicos por región. Imágenes básicas musculares, ligamentosas, nerviosas, plexuales y terminales. Vasos. Fascia. Ecodinamia. Casos clínicos");

const temasCurso3 = new Tema("Módulo 1: -Conociendo el ecógrafo -Medicina regenerativa: targets frecuentes por región bajo ecografía. -Dolor: algoritmos de inclusión de los procedimientos. Pacientes.-Tecnología en el consultorio Módulo 2: Región ecográfica 1 –Columna lumbo–sacra. Miembro inferior. Plexo lumbar y nervios terminales. Módulo 3: Región ecográfica 2 – Regiones del cuello y maxilofacial. Columna cervical. Plexo braquial en región supraclavicular Módulo 4: Región ecográfica 3 – Hombro, mano y codo. Plexo braquial. Bloqueos en miembro superior. Módulo 5: Región ecográfica 4 - Cadera, pelvis y región del muslo. Módulo 6: Región ecográfica 5 – Rodilla, regiones de la pierna, tobillo y pie. Módulo 7: Región ecográfica 6 -Columna torácica, pared de tórax ecográfica y pared de abdomen. Región paravertebral y espacio Intercostal.");

//instanciaciones de las clases curso
const curso1 = new Curso("Curso introductorio eco dolor crónico","Clases en vivo on-line",temasCurso1,2023-02-28,2023-03-07);

const curso2 = new Curso("Curso básico introductorio dolor y eco intervencionismo","Clases en vivo on-line",temasCurso2,2023-02-28,2023-03-07);

const curso3 = new Curso("XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica","Clases en vivo on-line",temasCurso3,2023-03-21,2023-06-03);

//pushear los cursos al array
cursos.push(curso1);
cursos.push(curso2);
cursos.push(curso3);

elegirCurso(entrada);
function elegirCurso(entrada) {

    while (entrada != "ESC") {

        switch(entrada) {
            case "1":
                //metodo de busqueda para encontrar el curso
                if (chequearFechas(fechaIncio7regiones) == false) {
                    alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
                    entrada = prompt("Escriba ESC para salir ");
                    break;
                }
                else if (chequearFechas(fechaIncio7regiones) == true) {
                    alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de 7 regiones: ");
                    abrirFormulario();
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

function abrirFormulario () {
    let otroNombre = prompt("Si tiene otro nombre puede ingresarlo o presione enter para saltear este paso");
    let apellido = prompt("Ingrese su apellido: ");
    let numeroTarjeta = prompt("Ingrese su numero de tarjeta con la que abonara el curso: ");
    let codSeguridad = prompt("Ingrese el codigo de seguridad de la tarjeta: ");
    alert("A continuacion le mostramos los datos ingresados para que chequee si son correctos o no: ");
    alert("Su nombre de pila es: "+nombreUsuario);
    evaluarNombre(otroNombre);
    alert("Su apeliido es: "+apellido);
    alert("El numero de su tarjeta es: "+numeroTarjeta);
    alert("El codigo de seguridad de su tarjeta es: "+codSeguridad);
}

function evaluarNombre(nombre) {

    if (nombre == ""){
        alert("Usted no posee otros nombres");
    }
    else {
        alert("Su segundo nombre es: "+nombre);
    }
}

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

}











