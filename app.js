// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Varibale para ingresar la lista de nombres y la función Array para almacenar la lista

let nombresAmigos = [];

//Función para agregar nombres en el campo principal
function agregarAmigo() {
    let ingresoNombre = document.getElementById('amigo').value;

// Validar ingreso de nombres, actualizar array con push
// Limpiar campo de entrada
 // Validar si el nombre ya existe en el array
 if (nombresAmigos.includes(ingresoNombre)) {
    // Mostrar alerta o mensaje si el nombre ya existe
    alert("El nombre ingresado ya se encuentra registrado. Por favor, ingresa un nombre diferente.");
    return;  // Detener la ejecución si el nombre ya existe
}
   // Si el nombre no existe, agregarlo al array
if (ingresoNombre) {
    nombresAmigos.push(ingresoNombre);
    //para limpiar campo luego de agregar nombre
    document.getElementById('amigo').value = "";
    console.log(nombresAmigos);
    mostrarAmigos();
} else {
    alert("Por favor, ingresa un nombre: ");
}
}

// función para actualizar lista HTML con nombres
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < nombresAmigos.length; i++) {
    // Crear un nuevo <li>
        let nuevoAmigo = document.createElement('li');  
    // Asignar el nombre del amigo
        nuevoAmigo.textContent = nombresAmigos[i];    
    // Agregar el <li> a la lista    
        lista.appendChild(nuevoAmigo);                  
    }
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra la lista para actualizar
    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function repetirLista() {
    actualizarLista();
}

function limpiarLista() {
    listaAmigos = []; // Borra la lista
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// sorteo de amigos

function sortearAmigo(){
        // Validar si el array de amigos no está vacío
        if (nombresAmigos.length === 0) {
            alert("No hay lista disponibles para iniciar el sorteo.");
            return;
        }

 // Generar un índice aleatorio entre 0 y el largo del array - 1
 let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

 // Obtener el nombre sorteado usando el índice aleatorio
 let amigoSorteado = nombresAmigos[indiceAleatorio];

// Mostrar el resultado en el elemento HTML con id 'resultado'
    document.getElementById('resultado').innerHTML = "Su amigo secreto es: " + amigoSorteado;
}
