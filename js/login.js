//Vamos criar um objeto para armazenar o nosso usuário

//Estrutura básica de um objeto:
// const usuario = {

// }
const usuario = {
    nomeUsuario:"",
    senhaUsuario:""
}

addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;

        //Armazenando os dados no OBJETO
        usuario.nomeUsuario = document.querySelector("#idUser").value;
        usuario.senhaUsuario = document.querySelector("#idPass").value;
        const h1Titulo = document.querySelector("#titulo");
        //VALIDAÇÃO
        if(usuario.nomeUsuario == "rm99880" && usuario.senhaUsuario == "12345"){
            console.log("VALIDADO!");
            h1Titulo.innerHTML = "Bem vindo : " + usuario.nomeUsuario;
        }else{
            console.log("NÃO VALIDOU!");
            h1Titulo.innerHTML = "";
        }


    }

});