function login() {
    var usuarioInput = document.querySelector('input[name="usuario"]');
    var senhaInput = document.querySelector('input[name="senha"]');

    var usuario = usuarioInput.value;
    var senha = senhaInput.value;

    if (usuario === "ADMIN" && senha === "admin1234") {
        alert("Login bem-sucedido!");
        window.location.href = "../pages/foda-se.html";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}