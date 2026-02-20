const formulario = document.getElementById("miFormulario");

if (formulario){
    formulario.addEventListener("submit", function(event){

        event.preventDefault();
        
    
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value; 
        const perfil = document.getElementById("perfil").value;
        const educacion = document.getElementById("educacion").value;
        const experiencia = document.getElementById("experiencia").value;
        const idiomas = document.getElementById("idiomas").value;
        const referencias = document.getElementById("referencias").value;
        const archivo = document.getElementById("foto").files[0];


        localStorage.setItem("nombre", nombre);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("correo", correo);
        localStorage.setItem("perfil", perfil); 
        localStorage.setItem("educacion", educacion);
        localStorage.setItem("experiencia", experiencia);
        localStorage.setItem("idiomas", idiomas);
        localStorage.setItem("referencias", referencias);

        if (archivo){
            const lector = new FileReader();
            lector.onload = function(){
                localStorage.setItem("foto", lector.result),
                window.location.href = "hoja.html";
            };
            lector.readAsDataURL(archivo);
        }else{
            window.location.href = "hoja.html";
        }
    }); 
}

if(document.getElementById("mostrarNombre")){

    const nombreGuardado = localStorage.getItem("nombre");
    const telefonoGuardado = localStorage.getItem("telefono");
    const correoGuardado = localStorage.getItem("correo");
    const perfilGuardado = localStorage.getItem("perfil");
    const educacionGuardada = localStorage.getItem("educacion");
    const experienciaGuardada = localStorage.getItem("experiencia");
    const idiomaGuardado = localStorage.getItem("idiomas");
    const referenciaGuardada = localStorage.getItem("referencias"); 
    const fotoGuardada = localStorage.getItem("foto");
    const boton = document.getElementById("botonBorrar");


    document.getElementById("mostrarNombre").textContent = nombreGuardado;
    document.getElementById("mostrarTelefono").textContent = telefonoGuardado;
    document.getElementById("mostrarCorreo").textContent = correoGuardado;
    document.getElementById("mostrarPerfil").textContent = perfilGuardado;
    document.getElementById("mostrarEducacion").textContent = educacionGuardada;
    document.getElementById("mostrarExperiencia").textContent = experienciaGuardada;
    document.getElementById("mostrarIdiomas").textContent = idiomaGuardado;
    document.getElementById("mostrarReferencias").textContent = referenciaGuardada;

    if(fotoGuardada){
        document.getElementById("mostrarFoto").src = fotoGuardada;
    }
    if(boton){
        boton.addEventListener("click", function(){
            localStorage.clear();
            window.location.href = "form.html";
        });
    }
}