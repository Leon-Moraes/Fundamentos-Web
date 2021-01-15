let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let texto = document.querySelector('#text');
let button = document.querySelector('#btn');


function validaNome() {
    let nomeForm = document.querySelector('#nomeForm');
    if(nome.value.length < 2) {
        
        nomeForm.innerHTML = 'Text invalid';
        nomeForm.style.color = 'red';
    } else {
        nomeForm.innerHTML = 'Text Valid';
        nomeForm.style.color = 'green';
    } 
}
function validaEmail() {
    let emailForm = document.querySelector('#emailForm');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        emailForm.innerHTML = 'Invalid Email';
        emailForm.style.color = 'red';
    } else {
        emailForm.innerHTML = 'Valid Email';
        emailForm.style.color = 'green';
    }
}
function validaText() {
    let textForm = document.querySelector('#textForm');
    let number = 0;

    if (texto.value.length <= 300) {
        number++;
        textForm.innerHTML = (number + '/300');
        textForm.style.color = 'black';
    } else{
        number = 300;
        textForm.innerHTML = (number + '/300');
        textForm.style.color = 'black';
    }
}