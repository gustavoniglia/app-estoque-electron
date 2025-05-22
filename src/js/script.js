var botaoEntrar = document.getElementById("submit")

function login() {
    var campoEmail = document.getElementById("email").value
    var campoSenha = document.getElementById("password").value

    if(campoEmail == "admin@admin.com" && campoSenha == "admin123" ){
        window.location.replace("dashboard.html")
    }else{
        alert("Email ou senha incorreta")
    }

    console.log("Entrar na função login")



}


botaoEntrar.addEventListener("click", login)