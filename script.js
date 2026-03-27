let form = document.getElementById('Formulario');

form.addEventListener('submit',function(e){

    e.preventDefault();

    let valido = true;

    let nome  = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

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

    if (telefone.length !== 9 ){
        document.getElementById('erroTelefone').textContent = 'O seu telefone deve conter 9 digitos.';
        valido = false
    }

    if(valido) { 
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `Dados enviados :<br> Nome ${nome} <br> Email ${email} <br> Senha ${senha} <br> `; }
})