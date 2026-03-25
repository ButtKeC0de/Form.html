let form = document.getElementById('Formulario');

form.addEventListener('submit',function(e){

    e.preventDefault();

    let valido = true;

    let nome  = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;


        document.getElementById('erroNome').textContent = '';
        document.getElementById('erroEmail').textContent = '';
        document.getElementById('erroSenha').textContent = '';


    if (nome.length < 3) {
        document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres.';
        valido = false;
    }

    if (!email.includes('@')) {
        document.getElementById('erroEmail').textContent = 'Email Inválido.';
        valido = false;
    }

    if (senha.length < 6 ){
        document.getElementById('erroSenha').textContent = 'Senha invalida, deve conter ao menos 6 caracteres.';
        valido = false
    }

    if(valido) { 
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `Dados enviados :<br> Nome ${nome} <br> Email ${email} <br> Senha ${senha} <br> `; }
})