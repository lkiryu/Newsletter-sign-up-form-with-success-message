function addError(){
    const email = document.querySelector('.input-email')
    const erro = document.querySelector('.error')
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.value.length === 0 || !email.value.match(validEmail)) {
        erro.classList.remove('none')
        email.classList.add('error')
        return
    }
}

export default addError