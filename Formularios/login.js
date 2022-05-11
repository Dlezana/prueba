const email = document.getElementById("email")
const pass = document.getElementById("password")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let = entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    console.log(regexEmail.test(email.Value))
    if(!regexEmail.test(email.Value)){
        warnings += 'El email no es válido <br>'
        entrar = true
    }

    if(pass.value.lenght < 4){
        warnings += 'La contraseña no es válida <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }

})