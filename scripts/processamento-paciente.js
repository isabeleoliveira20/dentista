document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastroCriancaForm');
    const mensagemErroCadastro = document.getElementById('mensagemErroCadastro');

    const loginForm = document.getElementById('loginForm');
    const mensagemErroLogin = document.getElementById('mensagemErroLogin');

    function salvarCadastro(event) {
        event.preventDefault();

        const nomeCrianca = document.getElementById('nomeCrianca').value;
        const idadeCrianca = document.getElementById('idadeCrianca').value;
        const cpfCrianca = document.getElementById('cpfCrianca').value;
        const nomeResponsavel = document.getElementById('nomeResponsavel').value;
        const emailResponsavel = document.getElementById('emailResponsavel').value;
        const senhaCrianca = document.getElementById('senhaCrianca').value;

        if (!nomeCrianca || !idadeCrianca || !cpfCrianca || !nomeResponsavel || !emailResponsavel || !senhaCrianca) {
            mensagemErroCadastro.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        const paciente = {
            nome: nomeCrianca,
            idade: idadeCrianca,
            cpf: cpfCrianca,
            nomeResponsavel,
            emailResponsavel,
            senha: senhaCrianca,
            consultas: []
        };

        localStorage.setItem('paciente', JSON.stringify(paciente));
        mensagemErroCadastro.textContent = 'Cadastro realizado com sucesso!';
    }

    function realizarLoginPaciente(event) {
        event.preventDefault();

        const loginCpf = document.getElementById('loginCpf').value;
        const loginSenha = document.getElementById('loginSenha').value;
        const paciente = JSON.parse(localStorage.getItem('paciente'));

        if (paciente && paciente.cpf === loginCpf && paciente.senha === loginSenha) {
            mensagemErroLogin.textContent = 'Login realizado com sucesso!';
            window.location.href = 'espaco-infantil.html';
        } else {
            mensagemErroLogin.textContent = 'CPF ou senha incorretos.';
        }
    }

    cadastroForm.addEventListener('submit', salvarCadastro);
    loginForm.addEventListener('submit', realizarLoginPaciente);
});
