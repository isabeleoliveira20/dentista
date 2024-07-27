document.addEventListener('DOMContentLoaded', () => {
    const dadosCriancaDiv = document.getElementById('dadosCrianca');
    const dadosDentistaDiv = document.getElementById('dadosDentista');
    const relatorioConsultasDiv = document.getElementById('relatorioConsultas');

    function loadData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

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

    const paciente = loadData('paciente');
    const dentista = loadData('dentista');

    if (paciente) {
        const dadosCriancaHtml = `
            <h2>Dados da Criança</h2>
            <p><strong>Nome:</strong> ${paciente.nome}</p>
            <p><strong>Idade:</strong> ${paciente.idade}</p>
            <p><strong>CPF:</strong> ${paciente.cpf}</p>
            <p><strong>Nome do Responsável:</strong> ${paciente.nomeResponsavel}</p>
            <p><strong>Email do Responsável:</strong> ${paciente.emailResponsavel}</p>
            <!-- Senha não exibida -->
        `;
        dadosCriancaDiv.innerHTML = dadosCriancaHtml;

        let consultasHtml = '<h2>Relatório de Consultas</h2>';
        if (paciente.consultas && paciente.consultas.length > 0) {
            paciente.consultas.forEach((consulta, index) => {
                consultasHtml += `
                    <div class="consulta">
                        <h3>Consulta ${index + 1}</h3>
                        <p><strong>Caso Clínico:</strong> ${consulta.casoClinico || gerarCasoClinico()}</p>
                        <p><strong>Pré-atendimento:</strong> ${consulta.preAtendimento || 'Não registrado'}</p>
                        <p><strong>Pós-atendimento:</strong> ${consulta.postAtendimento || 'Não registrado'}</p>
                    </div>
                `;
            });
        } else {
            consultasHtml += '<p>Nenhuma consulta encontrada.</p>';
        }
        relatorioConsultasDiv.innerHTML = consultasHtml;
    } else {
        dadosCriancaDiv.innerHTML = '<p>Nenhum dado de criança encontrado.</p>';
        relatorioConsultasDiv.innerHTML = '<p>Nenhuma consulta encontrada.</p>';
    }

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

