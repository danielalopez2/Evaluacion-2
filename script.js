/* Llamando al formulario */

const agregarUser = document.getElementById("agregarUser");

    /* Elementos del formulario */

const identificacion = document.getElementById("identificacion");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const placa = document.getElementById("placa");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const tipo = document.getElementById("tipo");

/* Llamando tabla de usuarios  */
const cuerpoTablaUsers = document.getElementById("cuerpoTablaUsers");

    /* Llamando tabla de usuarios (cuerpo)  */
const agregar =document.getElementById("agregar");
const listar =document.getElementById("listar");
const buscar =document.getElementById("buscar");
const editar =document.getElementById("editar");

let idUsuario =0;


let fidelizacion=0; /* Puntos fidelizacion */

const usuarios = [] /* Creacion del objeto usuario */

/* Funcion añadir usuario */
const añadirUsuario = (event) =>{
    event.preventDefault();
    /* Creacion del objeto usuario */
    const usuario = {
        idUsuario:idUsuario,
        identificacion:identificacion.value,
        nombres: nombres.value,
        apellidos: apellidos.value,
        placa: placa.value,
        correo: correo.value,
        telefono: telefono.value,
        tipo:tipo.value,
    }
    usuarios.push(usuario);
    agregarUser.reset();
    idUsuario++
}

/* Funcion listar usuario */

const listarUsuario =()=>{
    cuerpoTablaUsers.innerHTML=""
    for (let usuario of usuarios){
        const filaUsuario=document.createElement("tr")
        filaUsuario.id="filaUsuario"
        filaUsuario.innerHTML=`
        <tr>
            <th>${usuario.identificacion}</th>
            <td>${usuario.nombres}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.placa}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.tipo}</td>
            <td class='w-25' id='$usuario.idUsuario'> 
            <button type="button"
            class="btn btn-sm btn-warning m-1 editarUsuario" id="btnEditarUsuario" data-bs-toggle="modal" dat-bs-target="#modalEditar">Editar</button>
        
            <button type="button" class="btn btn-sm btn-danger m-1" id="btnEliminarUsuario">Eliminar</button>

        </tr>
        
        
        `
        cuerpoTablaUsers.appendChild(filaUsuario) 

    }
}

buscar.addEventListener('input',e=>{
    const textoBuscado=e.target.value;

    document.querySelectorAll('#filaUsuario').forEach(fila =>{

        const primeraCelda= fila.querySelector("#identificacionEliminar");
        console.log(primeraCelda);
        const textoCelda =primeraCelda.textContent;
        if(textoCelda.includes(textoBuscado)){
            fila.classList.remove('filtro')
        }else{
            fila.classList.add('filtro');
        }
    });
});

const indiceArreglo = ( nombreId,numeroId,arreglo ) => { // Conseguir el indice del objeto en el arreglo comparando id
    
    for ( let i = 0; i < arreglo.length; i++ ){
        if ( arreglo[i][nombreId] == numeroId ){ 
            return i;
        }
    }
}


const operacionUsuarios=(event)=>{
    let botonEvento=event.target

    
    if(botonEvento.id == "btnEliminarUsuario"){
        let idPadre =botonEvento.parentNode.id;
        let indice =indiceArreglo("idUsuario",idPadre,usuarios);

        usuarios.splice(indice,1);
        listarUsuario();

    }

    if(botonEvento.id == "btnEditarUsuario"){
        let idPadre=botonEvento.parentNode.id;
        let indice =indiceArreglo("idUsuario",idPadre,usuarios);

        const agregar=document.getElementById("agregar")
        const listar=document.getElementById("listar")

        agregar.classList.add("ocultar")
        editar.classList.remove("ocultar")
        listar.classList.add("ocultar")

        identificacion.value=usuarios[indice].identificacion
        nombres.value=usuarios[indice].nombres
        apellidos.value=usuarios[indice].apellidos
        placa.value=usuarios[indice].placa
        tipo.value=usuarios[indice].tipo
        correo.value=usuarios[indice].correo
        telefono.value=usuarios[indice].telefono

        const editarUsuario=(event)=>{
            event.preventDefault()

            usuarios[indice].identificacion=identificacion.value;
            usuarios[indice].nombres=nombres.value;
            usuarios[indice].apellidos=apellidos.value;
            usuarios[indice].placa=placa.value;
            usuarios[indice].tipo=tipo.value;
            usuarios[indice].correo=correo.value;
            usuarios[indice].telefono=telefono.value;
            
            listar.classList.remove("ocultar");
            agregar.classList.remove('ocultar');
            editar.classList.add('ocultar');
            listarUsuario()
            agregarUser.reset()
            editar.removeEventListener("click",editarUsuario);
            

        }

        editar.addEventListener("click",editarUsuario);


    }

    
}
/* Evento de formulario usuarios */

agregar.addEventListener("click", añadirUsuario);
listar.addEventListener("click", listarUsuario);
cuerpoTablaUsers.addEventListener ("click", operacionUsuarios)











/* LLAMADA DEL SEGUNDO FORMULARIO */
/* Llamando al formulario */

const agregarServicio = document.getElementById("agregarServicio");

    /* Elementos del formulario */

const nombreServicio= document.getElementById("nombreServicio");
const valorServicio = document.getElementById("valorServicio");
const descripcion = document.getElementById("descripcion");
const puntos = document.getElementById("puntos");


/* Llamando tabla de usuarios  */
const tablaServicios = document.getElementById("tablaServicios");

    /* Llamando tabla de usuarios (cuerpo)  */
const agregarS =document.getElementById("agregarS");
const eliminarS =document.getElementById("eliminarS");
const listarS = document.getElementById ("listarS");



const servicios = [] /* Creacion del objeto usuario */
let idServicio= 0
const añadirServicio = (event) =>{
    event.preventDefault();
    /* Creacion del objeto  */
    const servicio = {
        idServicio:idServicio,
        ID:ID.value,
        nombreServicio: nombreServicio.value,
        valorServicio: valorServicio.value,
        descripcion: descripcion.value,
        puntos: puntos.value,

    }
    servicios.push(servicio);
    agregarServicio.reset();
    idServicio++
}

/* Funcion listar usuario */

const listarServicio =()=>{
    cuerpoTablaUsers.innerHTML=""
    for (let servicio of servicios){
        const filaServicio=document.createElement("tr")
        filaServicio.id="filaServicio"
        filaServicio.innerHTML=`
        <tr>
            <th>${servicio.ID}</th>
            <td>${servicio.nombreServicio}</td>
            <td>${servicio.apellidos}</td>
            <td>${servicio.valorServicio}</td>
            <td>${servicio.descripcion}</td>
            <td>${servicio.puntos}</td>


        
            <button type="button" class="btn btn-sm btn-danger m-1" id="btnEliminarServicio">Eliminar</button>

        </tr>
        
        
        `
        tablaServicios.appendChild(filaServicio) 

    }
}

agregarS.addEventListener("click", añadirServicio);
eliminarS.addEventListener("click", eliminarServicio);
listarS.addEventListener("click", listarServicio);


