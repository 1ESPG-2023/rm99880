addEventListener("click", (evento)=>{
    //console.log(evento.target.id == "btnSubmit");

    evento.preventDefault();
    if(evento.target.id == "btnSubmit"){
        let usuario = document.querySelector("#idUser").value;
        let senha = document.querySelector("#idPass").value;
        console.log(usuario,senha);
        
        //VALIDAÇÃO
        if(usuario == "rm99880" && senha == "12345"){
            console.log("VALIDADO!")
        }else{
            console.log("NÃO VALIDOU!");
        }
    }
});