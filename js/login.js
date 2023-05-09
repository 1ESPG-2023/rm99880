//Gerando dois objetos no LOCALSTORAGE

const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"1234"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


//Vamos criar um objeto para armazenar o nosso usuário

// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:""
// }

addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;

        //Recuperando dos inputs
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;

        const h1Titulo = document.querySelector("#titulo");
        
        let lista = JSON.parse(localStorage.getItem("listaUser"));

        lista.forEach((usuario)=>{
            //VALIDAÇÃO
            if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                console.log("VALIDADO!");
                h1Titulo.innerHTML = "Bem vindo : " + usuario.nomeUsuario;
                return;
            }else{
                console.log("NÃO VALIDOU!");
                h1Titulo.innerHTML = "";
                return;
            }
        });




    }

});