const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let = entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.Value.lenght <6){
        warnings += 'El nombre no es válido <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.Value))
    if(!regexEmail.test(email.Value)){
        warnings += 'El email no es válido <br>'
        entrar = true
    }
    if(pass.value.lenght < 4){
        warnings += 'La contraseña no es válida, tiene que ser mayor a 4 carácteres <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})
