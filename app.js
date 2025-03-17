let listaAmigos=[];
let amigosElegidos=[];

function agregarAmigo(){
nuevoNombre=document.getElementById('amigo').value.trim();
    if(listaAmigos.includes(nuevoNombre)){
        console.log('El nombre ya ha sido ingresado, ingrese otro por favor');
    }else if(nuevoNombre==""|| nuevoNombre==" "|| nuevoNombre==null){
        alert('el valor ingresado no es valido, intente nuevamente');
    }else{
        listaAmigos.push(nuevoNombre);
        console.log(listaAmigos);
        actualizarLista();
    }
    document.getElementById('amigo').value=" ";
    return;
};

function actualizarLista(){
let lista = document.getElementById('listaAmigos');
lista.innerHTML="";
    for(let i =0;i<listaAmigos.length;i++){
        let li = document.createElement('li');
        li.textContent=listaAmigos[i];
        lista.appendChild(li);
    };
    return;
};

function sortearAmigo(){
let numerorandom=Math.floor(Math.random()*listaAmigos.length);
let amigoSorteado =listaAmigos[numerorandom];
    if(listaAmigos==0){
        alert ('no hay amigos para sortear');
    }else if(amigosElegidos.length==listaAmigos.length){
        alert('se han sorteado todos los nombres!');
    }
    else if (amigosElegidos.includes(amigoSorteado)){
        sortearAmigo();
    } else {
        amigosElegidos.push(amigoSorteado);
        console.log(amigosElegidos);
        let texto = document.getElementById('resultado');
        texto.innerHTML=`Tu amigo secreto es ${amigoSorteado}`;
    }
let limpiarLista = document.getElementById('listaAmigos');
limpiarLista.innerHTML="";
    return;
};

