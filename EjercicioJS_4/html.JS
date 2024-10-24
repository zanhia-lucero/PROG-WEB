const newTarea = document.getElementById('newTarea'); 
const botonAgregarTarea = document.getElementById('agregarTarea'); 
const listaTarea = document.getElementById('listaTarea'); 


document.addEventListener('DOMContentLoaded', cargarTareasGuardadas);
botonAgregarTarea.addEventListener('click', agregarTarea);

function cargarTareasGuardadas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []; 
    tareasGuardadas.forEach(tarea => {
        mostrarTareaEnLista(tarea.texto, tarea.completada); 
    });
}


function agregarTarea() {
    const textoTarea = newTarea.value.trim(); 
    if (textoTarea !== '') { 
        const nuevaTarea = { texto: textoTarea, completada: false }; 
        mostrarTareaEnLista(textoTarea, false); 
        guardarTareaEnLocalStorage(nuevaTarea); 
        newTarea.value = ''; 
    }
}


function mostrarTareaEnLista(textoTarea, estaCompletada) {
    const elementoLista = document.createElement('li'); 

    const checkboxCompletada = document.createElement('input');
    checkboxCompletada.type = 'checkbox'; 
    checkboxCompletada.checked = estaCompletada; 
    checkboxCompletada.addEventListener('change', marcarTareaComoCompletada); 

    
    const textoTareaElemento = document.createElement('span');
    textoTareaElemento.textContent = textoTarea; 
    if (estaCompletada) textoTareaElemento.classList.add('completed'); 

    
    const botonEliminarTarea = document.createElement('button');
    botonEliminarTarea.textContent = 'Eliminar'; 
    botonEliminarTarea.className = 'delete'; 
    botonEliminarTarea.addEventListener('click', eliminarTarea); 

    
    elementoLista.appendChild(checkboxCompletada);
    elementoLista.appendChild(textoTareaElemento);
    elementoLista.appendChild(botonEliminarTarea);
    listaTarea.appendChild(elementoLista);
}


function guardarTareaEnLocalStorage(nuevaTarea) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []; 
    tareasGuardadas.push(nuevaTarea); 
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas)); 
}


function marcarTareaComoCompletada(evento) {
    const checkbox = evento.target; 
    const textoTarea = checkbox.nextElementSibling.textContent; 
    actualizarEstadoTareaEnLocalStorage(textoTarea, checkbox.checked); 
    checkbox.nextElementSibling.classList.toggle('completed'); 
}


function eliminarTarea(evento) {
    const tareaLi = evento.target.parentElement; 
    const textoTarea = tareaLi.querySelector('span').textContent; 
    eliminarTareaDeLocalStorage(textoTarea); 
    tareaLi.remove(); 
}


function actualizarEstadoTareaEnLocalStorage(textoTarea, estaCompletada) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []; 
    const tareasActualizadas = tareasGuardadas.map(tarea =>
        tarea.texto === textoTarea ? { ...tarea, completada: estaCompletada } : tarea 
    );
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas)); 
}


function eliminarTareaDeLocalStorage(textoTarea) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []; 
    const tareasFiltradas = tareasGuardadas.filter(tarea => tarea.texto !== textoTarea); 
    localStorage.setItem('tareas', JSON.stringify(tareasFiltradas)); 
}
