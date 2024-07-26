document.addEventListener('DOMContentLoaded', () => {
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

    localStorage.setItem('dentista', JSON.stringify(dentista));

    function redirecionarDentista() {
        window.location.href = 'espaco-dentista.html';
    }

    const loginForm = document.getElementById('loginForm');
    const mensagemErroLogin = document.getElementById('mensagemErroLogin');

    function realizarLoginDentista(event) {
        event.preventDefault();

        const loginCpf = document.getElementById('loginCpf').value;
        const loginSenha = document.getElementById('loginSenha').value;

        if (dentista.login === loginCpf && dentista.senha === loginSenha) {
            redirecionarDentista();
        } else {
            mensagemErroLogin.textContent = 'CPF ou senha incorretos.';
        }
    }

    loginForm.addEventListener('submit', realizarLoginDentista);
});
