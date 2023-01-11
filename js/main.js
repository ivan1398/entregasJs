//espacio para variables
fechaActual = new Date();
let clientePorPagar;
let nuevoPago;

// let nombreUsuario = prompt("Bienvenido al sistema de inscripciones a cursos MEDU, ingrese su nombre por favor: ");
// let entrada = prompt("Hola"+" "+nombreUsuario+"! "+"Ingrese 1 Para inscribirse en 'Curso introductorio eco dolor crónico' , Ingrese '2' Para inscribirse en 'Curso básico introductorio dolor y eco intervencionismo' Ingrese '3' Para inscribirse en 'XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica' o escriba ESC para salir: ");


//declaracion de las clases
class Categoria {
    constructor(nombre,id) {
        this.nombre = nombre;
        this.id = id;
    }
};

class Curso  {
    constructor(id,nombre,imagen,precio,modalidad,Tema,fechaInicio,fechaFin,Categoria) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.modalidad = modalidad;
        this.Tema = Tema;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.Categoria = Categoria;
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

const temasCurso4 = new Tema("Esto es una lista de temas");

const temasCurso5 = new Tema("Esto es una lista de temas");

const temasCurso6 = new Tema("Esto es una lista de temas");

//categorias
const categoria1 = new Categoria("Sin iniciar","sin iniciar");
const categoria2 = new Categoria("Finalizado","finalizado");
const categoria3 = new Categoria("En curso","en curso");

//instanciaciones de las clases curso
const curso1 = new Curso(1,"Curso introductorio eco dolor crónico","../img/Curso 1.jpg",1000,"Clases en vivo on-line",temasCurso1,new Date(2023,1,27),new Date(2023,02,06),categoria1);

const curso2 = new Curso(2,"Curso básico introductorio dolor y eco intervencionismo","../img/Curso 2.jpg",1000,"Clases en vivo on-line",temasCurso2,new Date(2023,02,28), new Date (2023,03,07),categoria1);

const curso3 = new Curso(3,"XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica","../img/Curso 3 .jpg",1000,"Clases en vivo on-line",temasCurso3,new Date(2023,03,21),new Date(2023,06,03),categoria1);

const curso4 = new Curso(4,"curso 4","../img/imagenCarrito.jpg",1000,"cursada en vivo",temasCurso4,new Date(2021,01,23),new Date(2022,03,10),categoria2)

const curso5 = new Curso(5,"curso 5","../img/imagenCarrito.jpg",1000,"cursada en vivo",temasCurso5,new Date(2022,01,23),new Date(2023,04,22),categoria3);

const curso6 = new Curso(6,"curso 6","../img/imagenCarrito.jpg",1000,"cursada en vivo",temasCurso6,new Date(2022,01,23),new Date(2022,04,22),categoria3);

//pushear los cursos al array
cursos.push(curso1);
cursos.push(curso2);
cursos.push(curso3);
cursos.push(curso4);
cursos.push(curso5);
cursos.push(curso6);

const contenedorCursos = document.querySelector("#contenedorCursos");
const botonesCategorias = document.querySelectorAll(".botonCategoria")
//cargo los cursos con JS

//le paso parametro de cursosElegidos para poder mostrar en la categoria inscripciones abiertas por ejemplo los que esten sin iniciar

function cargarCursos(cursosElegidos){
    contenedorCursos.innerHTML = "";
    cursosElegidos.forEach(curso => {
        const div = document.createElement("div");
        div.classList.add("curso");
        div.innerHTML = `
                <img class="cursoImagen" src="${curso.imagen}" alt="${curso.nombre}">
				<div class="cursoDetalles">
					<h3 class="cursoTitulo">${curso.nombre}</h3>
					<p class="cursoFechaInicio">${curso.fechaInicio}</p>
					<p class="cursoFechaFin">${curso.fechaFin}</p>
					<p class="cursoPrecio">$${curso.precio}</p>
					<button class="cursoBoton" id="${curso.id}">Inscribirse al curso</button>
				</div>
        `;

        contenedorCursos.append(div);
    })
}

cargarCursos(cursos); 

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const cursosBoton = productos.filter(curso => curso.Categoria.id === e.currentTarget.id);   
            cargarCursos(cursosBoton); 
        }else {
            cargarCursos(cursos);
        }
        
    })
});



// //llamada de la funcion
// elegirCurso(entrada);

// //definicion de funciones
// function elegirCurso(entrada) {

//     while (entrada != "ESC") {

//         switch(entrada) {
//             case "1":
//                 const cursoEncontrado1 = cursos.find((cursoBuscado) => cursoBuscado.nombre === "Curso introductorio eco dolor crónico");
//                 fechaInicioCurso1 = cursoEncontrado1.fechaInicio;
//                 if (chequearFechas(fechaInicioCurso1) == false) {
//                     alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
//                     entrada = prompt("Escriba ESC para salir ");
//                     break;
//                 }
//                 else if (chequearFechas(fechaInicioCurso1) == true) {
//                     alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso: "+cursoEncontrado1.nombre);
//                     archivarCliente(nombreUsuario);
//                     despedirUsuario(nombreUsuario);
//                     entrada = prompt("Escriba ESC para salir ");
//                     break;
//                 };
//             case "2":
//                 const cursoEncontrado2 = cursos.find((cursoBuscado) => cursoBuscado.nombre === "Curso básico introductorio dolor y eco intervencionismo");
//                 fechaInicioCurso2 = cursoEncontrado2.fechaInicio;
//                 if (chequearFechas(fechaInicioCurso2) == false) {
//                     alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
//                     entrada = prompt("Escriba ESC para salir ");
//                     break;
//                 }
//                 else if (chequearFechas(fechaInicioCurso2) == true) {
//                     alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso: "+cursoEncontrado2.nombre);
//                     archivarCliente(nombreUsuario);
//                     despedirUsuario(nombreUsuario);
//                     entrada = prompt("Escriba ESC para salir ");
//                     break;
//                 };
//             case "3":
//                 const cursoEncontrado3 = cursos.find((cursoBuscado) => cursoBuscado.nombre === "XXII Curso MeDU de Ecografía  Intervencionista en dolor crónico, agudo y perianalgesia quirúrgica");
//                 fechaInicioCurso3 = cursoEncontrado3.fechaInicio;
//                 if (chequearFechas(fechaInicioCurso3) == false) {
//                     alert("Lo sentimos pero el curso ya ha iniciado! Sera un placer tenerlo en la próxima edición!");
//                     entrada = prompt("Escriba ESC para salir ");
//                     break;
//                 }
//                 else if (chequearFechas(fechaInicioCurso3) == true) {
//                     alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso: "+cursoEncontrado3.nombre);
//                     archivarCliente(nombreUsuario);
//                     despedirUsuario(nombreUsuario);
//                     entrada = prompt("Escriba ESC para salir ");
//                     break;
//                 };
//             default:
//                 alert("Disculpe que no podamos ayudarlo! El curso que ingreso no se encuentra disponible momentaneamente");
//                 entrada = prompt("Escriba ESC para salir ");
//                 break;
//             };
//         };
//     };



// function evaluarNombre(nombre) {

//     if (nombre == ""){
//         alert("Usted no posee otros nombres");
//     }
//     else {
//         alert("Su segundo nombre es: "+nombre);
//     }
// };

// function despedirUsuario(nombreUsuario) {
//     alert("Gracias por confiar en nosotros"+" "+nombreUsuario+" "+"le aseguramos que será una experiencia sumamente enriquecedora");
// }

// function chequearFechas(unaFecha) {
//     if (unaFecha < fechaActual) {
//         return false;
//     }
//     else {
//         return true;
//     }

// };

// function archivarCliente(nombreUsuario) {
//     alert("A continuación le pediremos una serie de datos para poder inscribirlo al curso correctamente, por favor clickee en aceptar");
//     nombre = nombreUsuario;
//     otroNombre = prompt("Si tiene otro nombre puede ingresarlo o presione enter para saltear este paso");
//     apellido = prompt("Ingrese su apellido: ");
//     pais = prompt("Ingrese su nacionalidad: ");
//     especialidad = prompt("Ingrese su especialidad en la medicina: ");
//     dni = prompt("Escriba su numero de documento de identidad: ");
//     numeroTel = prompt("Proporcionenos un numero de telefono para contactarnos con usted: ");
//     codPostal = prompt ("Ingrese su codigo postal: ");
//     medioDeConoc = prompt("Ingrese el medio mediante el cual nos ha conocido: ");
//     tieneEcografo = prompt("Ingrese 'sí' si usted posee un ecógrafo para trabajar, de lo contrario ingrese 'no'");
//     puedeViajar = prompt("Ingrese 'sí' si usted puede viajar a nuestro centro en Concepción del Uruguay, Entre Ríos. Argentina en fechas acordadas previamente, de lo contrario ingrese 'no'");
//     clientePorPagar = new Cliente(nombre,otroNombre,apellido,pais,especialidad,dni,numeroTel,codPostal,medioDeConoc,tieneEcografo,puedeViajar);
//     clientes.push(clientePorPagar);
//     asignarPago(clientePorPagar);
// };

// function asignarPago(clientePorPagar) {
//     alert("Le pediremos a continuación una serie de datos para que pueda abonar el curso al cual acaba de inscribirse, por favor seleccione el botón aceptar");
//     numeroTarjeta = prompt("Ingrese por favor el numero de tarjeta");
//     fecha = new Date();
//     codSeguridad = prompt("Ingrese por favor el codigo de seguridad de su tarjeta: ");
//     nuevoPago = new medioPago(clientePorPagar,numeroTarjeta,fecha,codSeguridad);
//     pagos.push(nuevoPago);
//     mostrarDatos(clientePorPagar,nuevoPago);
// };

// function evaluarEcografo(tieneEcografo) {
//     tieneEcografo = tieneEcografo.toLowerCase();
//     if (tieneEcografo === "sí" || tieneEcografo === "si"){
//         alert("Usted posee un ecógrafo propio para trabajar durante el curso");
//     }
//     else if (tieneEcografo === "no"){
//         alert("Usted no posee un ecógrafo propio para trabajar durante el curso");
//     }
//     else {
//         alert("Usted no ha especificado correctamente si tiene o no un ecógrafo, por favor vuelva a ingresar y especifique una de las opciones proporcionadas");
//     }
// };

// function evaluarPuedeViajar(puedeViajar) {
//     puedeViajar =  puedeViajar.toLowerCase();
//     if (puedeViajar === "sí" || tieneEcografo === "si"){
//         alert("Usted podrá viajar en días acordados para rotar por nuestro centro en Argentina");
//     }
//     else if (puedeViajar === "no") {
//         alert("Usted no podrá viajar a rotar por nuestro centro en Argentina");
//     }  
//     else {
//         alert("Usted no ha especificado correctamente si puede o no viajar, por favor vuelva a ingresar y especifique una de las opciones proporcionadas");
//     }
// };

// function mostrarDatos(clientePorPagar,nuevoPago){
//     alert("A continuacion le mostraremos los datos proporcionados para chequear su veracidad, por favor seleccione aceptar");
//     alert("Su nombre de pila es: "+clientePorPagar.nombre);
//     evaluarNombre(clientePorPagar.otroNombre);
//     alert("Su apellido es: "+clientePorPagar.apellido);
//     alert("Usted es de: "+clientePorPagar.pais);
//     alert("Su especialidad en la medicina es: "+clientePorPagar.especialidad);
//     alert("Su dni es: "+clientePorPagar.dni);
//     alert("Su numero telefonico es: "+clientePorPagar.numeroTel);
//     alert("El código postal de su país de origen es: "+clientePorPagar.codPostal);
//     alert("Usted nos conoció mediante: "+clientePorPagar.medioDeConoc);
//     evaluarEcografo(clientePorPagar.tieneEcografo);
//     evaluarPuedeViajar(clientePorPagar.puedeViajar);
//     //pago
//     alert("El número de su tarjeta es: "+nuevoPago.numeroTarjeta);
//     alert("El código de seguridad de su tarjeta es: "+nuevoPago.codSeguridad);
// };


















