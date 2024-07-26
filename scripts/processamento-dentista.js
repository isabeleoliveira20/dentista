document.addEventListener('DOMContentLoaded', () => {
    // Dados da dentista
    const dentista = {
        nome: "Dra. Alice Pereira",
        especialidade: "Odontopediatra",
        email: "alice.pereira@dentinho-feliz.com",
        telefone: "(21) 98765-4321",
        crm: "123456-RJ",
        anosExperiencia: 10,
        login: "odontopediatra",
        senha: "dentista123",
        numeroPacientes: 0
    };

    // Armazenar os dados da dentista no localStorage
    localStorage.setItem('dentista', JSON.stringify(dentista));

    // Função para redirecionar dentista para a página de espaço do dentista
    function redirecionarDentista() {
        window.location.href = 'espaco-dentista.html';
    }

    // Adicionar event listener ao formulário de login da dentista
    const loginForm = document.getElementById('loginForm');
    const mensagemErroLogin = document.getElementById('mensagemErroLogin');

    function realizarLoginDentista(event) {
        event.preventDefault();

        const loginCpf = document.getElementById('loginCpf').value;
        const loginSenha = document.getElementById('loginSenha').value;

        // Verificar se os dados de login são válidos
        if (dentista.login === loginCpf && dentista.senha === loginSenha) {
            redirecionarDentista();
        } else {
            mensagemErroLogin.textContent = 'CPF ou senha incorretos.';
        }
    }

    loginForm.addEventListener('submit', realizarLoginDentista);
});
