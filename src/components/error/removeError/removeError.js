function removeError(){
    const email = document.querySelector('.input-email')
    const erro = document.querySelector('.error')
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.value.match(validEmail)) {
        erro.classList.add('none')
        email.classList.remove('error')
    }
}

export default removeError