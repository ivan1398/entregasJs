let nombreUsuario = prompt("Bienvenido al sistema de inscripciones a cursos MEDU, ingrese su nombre por favor: ");
let entrada = prompt("Hola"+" "+nombreUsuario+"! "+"Ingrese el nombre del curso al que desee inscribirse, el id del mismo en caso de que lo sepa o escriba ESC para salir: ");
elegirCurso(entrada);

function elegirCurso(entrada) {
    
    while (entrada != "ESC") {

        switch(entrada) {
            case "7 regiones": 
                alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de 7 regiones: ");
                abrirFormulario();
                despedirUsuario(nombreUsuario);
                entrada = prompt("Escriba ESC para salir ");
                break;

            case "Dolor cronico":
                alert(+nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de dolor cronico: ");
                abrirFormulario();
                despedirUsuario(nombreUsuario);
                entrada = prompt("Escriba ESC para salir ");
                break;
           
            case "Anestecia local":
                alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de Anestecia local: ");
                abrirFormulario();
                despedirUsuario(nombreUsuario);
                entrada = prompt("Escriba ESC para salir ");
                break;
            
            case "Tratamientos artroscopicos":
                alert(nombreUsuario+" "+"seleccione aceptar y se abrira el formulario de inscripcion para el curso de tratamientos artroscopicos: ");
                abrirFormulario();
                despedirUsuario(nombreUsuario);
                entrada = prompt("Escriba ESC para salir ");
                break;
           
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