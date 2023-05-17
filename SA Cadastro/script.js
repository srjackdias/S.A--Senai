function Entrar(){

let NomeUsuario=document.getElementById("inputNome").value
let SenhaUsuario=document.getElementById("inputsenha").value
let ApresentarnaTela=document.getElementById("inptMostra")



    if (NomeUsuario == "Jair" && SenhaUsuario == "123") {
        location.href="home.html";
    } else {
        ApresentarnaTela.innerHTML=(`Usuario ou senha incorretos`)   
    }


}

