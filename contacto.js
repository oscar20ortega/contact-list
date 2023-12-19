let listaDeContactos=["karen llerena","calor ortega","gavina ramos"]

function agregarcontacto( nomdreApellido){
    listaDeContactos.push(nomdreApellido)
}

function borrarContacto(nomdreApellido){
    const index=listaDeContactos.indexOf(nomdreApellido)
    if(index !== -1){
 listaDeContactos.splice(index,1);      
    } else{
console.log("el contacto no existe en la lista")
    }
}

function imprimirContacto(){
    if(listaDeContactos.length === 0){
        console.log("la lista de contacto es vacia");
    }else{
        console.log("lista de contacto");
        listaDeContactos.forEach((contacto)=>{
            console.log(contacto);
        });
    }
}

imprimirContacto();
 
agregarcontacto("oscar sarmiento");
imprimirContacto();

borrarContacto("luis durango");
