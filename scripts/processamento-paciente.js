document.addEventListener('DOMContentLoaded', () => {
    // Elementos do formulário de cadastro
    const cadastroForm = document.getElementById('cadastroCriancaForm');
    const mensagemErroCadastro = document.getElementById('mensagemErroCadastro');

    // Elementos do formulário de login
    const loginForm = document.getElementById('loginForm');
    const mensagemErroLogin = document.getElementById('mensagemErroLogin');

    // Função para salvar os dados de cadastro no localStorage
    function salvarCadastro(event) {
        event.preventDefault();

        const nomeCrianca = document.getElementById('nomeCrianca').value;
        const idadeCrianca = document.getElementById('idadeCrianca').value;
        const cpfCrianca = document.getElementById('cpfCrianca').value;
        const nomeResponsavel = document.getElementById('nomeResponsavel').value;
        const emailResponsavel = document.getElementById('emailResponsavel').value;
        const senhaCrianca = document.getElementById('senhaCrianca').value;

        // Validar se todos os campos foram preenchidos
        if (!nomeCrianca || !idadeCrianca || !cpfCrianca || !nomeResponsavel || !emailResponsavel || !senhaCrianca) {
            mensagemErroCadastro.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        // Criar objeto com os dados do paciente
        const paciente = {
            nome: nomeCrianca,
            idade: idadeCrianca,
            cpf: cpfCrianca,
            nomeResponsavel,
            emailResponsavel,
            senha: senhaCrianca,
            consultas: []
        };

        // Armazenar os dados do paciente no localStorage
        localStorage.setItem('paciente', JSON.stringify(paciente));
        mensagemErroCadastro.textContent = 'Cadastro realizado com sucesso!';
    }

    // Função para realizar o login
    function realizarLoginPaciente(event) {
        event.preventDefault();

        const loginCpf = document.getElementById('loginCpf').value;
        const loginSenha = document.getElementById('loginSenha').value;

        // Recuperar os dados do paciente do localStorage
        const paciente = JSON.parse(localStorage.getItem('paciente'));

        // Verificar se os dados de login são válidos
        if (paciente && paciente.cpf === loginCpf && paciente.senha === loginSenha) {
            mensagemErroLogin.textContent = 'Login realizado com sucesso!';
            window.location.href = 'espaco-infantil.html';
        } else {
            mensagemErroLogin.textContent = 'CPF ou senha incorretos.';
        }
    }

    // Adicionar event listeners aos formulários
    cadastroForm.addEventListener('submit', salvarCadastro);
    loginForm.addEventListener('submit', realizarLoginPaciente);
});
