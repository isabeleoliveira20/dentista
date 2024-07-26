document.addEventListener('DOMContentLoaded', function() {
    const dadosPacienteDiv = document.getElementById('dadosPaciente');
    const dadosDentistaDiv = document.getElementById('dadosDentista');
    const relatorioConsultasDiv = document.getElementById('relatorioConsultas');

    // Função para carregar dados do localStorage
    function loadData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    // Função para gerar um caso clínico fictício
    function gerarCasoClinico() {
        const casosClinicos = [
            'Canal',
            'Colocação de aparelho',
            'Limpeza',
            'Extração de dente',
            'Restauração',
            'Aplicação de flúor'
        ];
        return casosClinicos[Math.floor(Math.random() * casosClinicos.length)];
    }

    // Carregar dados do paciente
    const paciente = loadData('paciente');

    if (paciente) {
        // Exibir dados do paciente
        const dadosPacienteHtml = `
            <h2>Dados do Paciente</h2>
            <p><strong>Nome:</strong> ${paciente.nomeCrianca}</p>
            <p><strong>Idade:</strong> ${paciente.idadeCrianca}</p>
            <p><strong>CPF:</strong> ${paciente.cpfCrianca}</p>
            <p><strong>Nome do Responsável:</strong> ${paciente.nomeResponsavel}</p>
            <p><strong>Email do Responsável:</strong> ${paciente.emailResponsavel}</p>
        `;
        dadosPacienteDiv.innerHTML = dadosPacienteHtml;

        // Exibir relatório de consultas
        let consultasHtml = '<h2>Relatório de Consultas</h2>';
        if (paciente.consultas && paciente.consultas.length > 0) {
            paciente.consultas.forEach((consulta, index) => {
                consultasHtml += `
                    <div class="consulta">
                        <h3>Consulta ${index + 1}</h3>
                        <p><strong>Caso Clínico:</strong> ${gerarCasoClinico()}</p>
                        <p><strong>Pré-atendimento:</strong> ${consulta.preAtendimento}</p>
                        <p><strong>Pós-atendimento:</strong> ${consulta.postAtendimento}</p>
                    </div>
                `;
            });
        } else {
            consultasHtml += '<p>Nenhuma consulta encontrada.</p>';
        }
        relatorioConsultasDiv.innerHTML = consultasHtml;
    } else {
        dadosPacienteDiv.innerHTML = '<p>Nenhum dado de paciente encontrado.</p>';
        relatorioConsultasDiv.innerHTML = '<p>Nenhuma consulta encontrada.</p>';
    }

    // Carregar dados da dentista
    const dentista = loadData('dentista');
    if (dentista) {
        const dadosDentistaHtml = `
            <h2>Dados da Dentista</h2>
            <p><strong>Nome:</strong> ${dentista.nome}</p>
            <p><strong>Especialidade:</strong> ${dentista.especialidade}</p>
            <p><strong>Email:</strong> ${dentista.email}</p>
            <p><strong>Telefone:</strong> ${dentista.telefone}</p>
            <p><strong>CRM:</strong> ${dentista.crm}</p>
            <p><strong>Anos de Experiência:</strong> ${dentista.anosExperiencia}</p>
        `;
        dadosDentistaDiv.innerHTML = dadosDentistaHtml;
    } else {
        dadosDentistaDiv.innerHTML = '<p>Nenhum dado da dentista encontrado.</p>';
    }
});
