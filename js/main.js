//variables y funciones

let nombreUsuario = prompt("Bienvenido al sistema de inscripciones a cursos MEDU, ingrese su nombre por favor: ");
let entrada = prompt("Hola"+" "+nombreUsuario+"! "+"Ingrese 1-7 regiones, 2-Dolor cronico, 3-Anestecia local, 4-Tratamientos artroscopicos escriba ESC para salir: ");
let unaFecha;
let fechaActual = new Date();

//llamada de la funcion
elegirCurso(entrada);


//espacio para definir funciones
function elegirCurso(entrada) {
    
    while (entrada != "ESC") {

        switch(entrada) {
            case "1": 
                fechaIncio7regiones = new Date(2023,12,30);
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

