// const liElement = document.getElementsByTagName("li");

// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
    
// }
// console.log(liElement.length)

//Objetos são formados por propriedades (innerHTML - formata tags) (innerText - formata textos)



// Declaração de ARRAYS
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// //Espalhar o array com SPREAD [ ... ]
// let nr3 = [nr1,nr2];

// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);


// //Listando um array! Técnica especial
// nr3.forEach((itemDoArray)=> {
//     console.log(`Array-3 sendo listado ${itemDoArray}`);
// })  

// //Listando o array com MAP
// nr3.map((numero,key)=>{
//     console.log(`${(key+1)} - Itens do Array - ${numero}`);
//     numero.forEach((digitos)=>
//         console.log(digitos)
//     );
// })

//Convertendo HTML collection em ARRAY

// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml]

// liElementArray.map((item,key)=>{

//     if(item.textContent == "item-39"){
    
//         console.log(`${key+1} - ${item.textContent = "LOCALIZADO"}`)
//     }
// })



// function soma(p1,p2,p3) {
//     nr1 = p1;
//     nr2 = p2;

//     return (parseInt(nr1) + parseInt(nr2) + parseInt(p3))

//     console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
//     console.log(`Este é o parâmetro que foi passado: ${parametro}`)
// }




// //ARROW FUNCTION
// const mudaCor =  ()=>{

//     //Função SET-TIME-OUT
//     setTimeout(soma(1,2,3), 5000)

// }

// mudaCor();

function mudaCor() {

    let r = "";
    let g = "";
    let b = "";


    //random = Gera números aleatórios entre 0 e 1
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatoriamente.
    
    //Determinando para as variáveis r,g e b um valor entre 0 e 255.
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);


    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`);

    console.log(r,g,b);
}

mudaCor();