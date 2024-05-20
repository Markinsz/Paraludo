let options = document.getElementById("options")
let iconeBarras= document.getElementById("iconeBars")
let iconeX = document.getElementById("iconeX")

function AbrirFecharMenu() {

    if (options.classList.contains("menu_fechado")) {

        options.classList.remove("menu_fechado")

        options.style.display = "flex"

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    } else {
        options.classList.add("menu_fechado")

        options.style.display = "none"

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}

const Contato = (event) => {
    let valorNome = document.getElementById("campo_nome").value
    let valorEmail = document.getElementById("campo_email").value
    let valorDescricao = document.getElementById("campo_descricao").value

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorDescricao);
    
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://localhost:3000/contato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)
        document.querySelector("#contato form").reset()

        alert("Solicitação Cadastrada")
    }) 
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault();
}