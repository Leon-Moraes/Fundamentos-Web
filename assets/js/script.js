/*
    tag: getElementByTagName();
    class: getElementsByClassName();
    nome: getElementsByName();
    seletor: querySelector();
*/
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
    let txt = document.querySelector('#txtNome');
    if(nome.value.length < 3) {
       txt.innerHTML = 'Nome inválido.';
       txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome Válido!';
        txt.style.color = 'green';
        nomeOk = true;
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
       txtEmail.innerHTML = 'Email inválido.';
       txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'Email Válido!';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande. Digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk ==true) {
        alert('formulário enviado com sucesso.')
    } else {
        alert('preencha o formúlario corretamente antes de enviar.')
    }
}
function zoom() {

}
function normal() {

}