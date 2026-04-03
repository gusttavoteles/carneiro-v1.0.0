function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "adm@1234" && senha === "1234") {
        alert("Bem vindo, Gusttavo!");
        window.location.href = "../pages/adm.html";
        return false;
    } else if (usuario == "karol@1234" && senha == "1234"){
                alert("Bem vinda, Karol!")
                window.location.href = "html/adm.html";
                return false;
    }
    
    else {
        alert("Usuário ou senha incorretos!");
        return false;
    }

}