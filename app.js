// lista de amigos vacía
let amigos = []
let amigo = ""; // variable para almacenar el nombre del amigo




// función para agregar un amigo
function agregarAmigo(nombre) {
    amigo = (document.getElementById("amigo").value);
    // si el nombre esta repetido no pasa al otro if
    if (amigos.includes(amigo)) {
        alert(`El amigo ${amigo} ya está en la lista.`);
        document.getElementById("amigo").value = "";
    }else if (amigo !== "") { // si el nombre no está vacío
        // agregar el amigo a la lista
        amigos.push(amigo);
        alert(`Amigo ${amigo} agregado.`);
        // limpiar el campo de entrada
        document.getElementById("amigo").value = "";
        // mostrar la lista de amigos
        asignarTextoElemento("listaAmigos", amigos);
        
    }else {
        alert("Por favor, inserte un nombre.");
    }
    return;
}
// función para mostrar la lista de amigos
function asignarTextoElemento(elemento, lista) {
    let listaHTML = document.getElementById(elemento); // Obtener el elemento HTML donde se mostrará la lista
    listaHTML.innerHTML = ""; // Limpiar la lista
    for (let amigo of lista) {      // Iterar sobre la lista de amigos
        let li = document.createElement("li");// Crear un nuevo elemento li
        li.textContent = amigo;// Asignar el nombre del amigo al elemento li
        listaHTML.appendChild(li); // Agregar el elemento a la lista HTML
    }
    return;
}
