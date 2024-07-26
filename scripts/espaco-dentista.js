document.addEventListener('DOMContentLoaded', function() {
    const dadosDentistaDiv = document.getElementById('dadosDentista');
    const numeroPacientesDiv = document.getElementById('numeroPacientes');
    const tabelaPacientesDiv = document.getElementById('tabelaPacientes');

    // Função para carregar dados do localStorage
    function loadData(key) {
        return JSON.parse(localStorage.getItem(key));
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

    // Carregar dados dos pacientes
    const paciente = loadData('paciente');
    if (paciente) {
        // Exibir número de pacientes atendidos
        numeroPacientesDiv.innerHTML = `<h2>Número de Pacientes Atendidos</h2><p>${paciente.consultas.length}</p>`;

        // Exibir tabela de pacientes
        let tabelaPacientesHtml = '<h2>Pacientes Atendidos</h2><table><tr><th>Nome</th><th>CPF</th><th>Casos Clínicos</th></tr>';
        paciente.consultas.forEach((consulta, index) => {
            tabelaPacientesHtml += `
                <tr>
                    <td>${paciente.nomeCrianca}</td>
                    <td>${paciente.cpfCrianca}</td>
                    <td>
                        <p><strong>Consulta ${index + 1}</strong></p>
                        <p><strong>Caso Clínico:</strong> ${consulta.casoClinico}</p>
                        <p><strong>Pré-atendimento:</strong> ${consulta.preAtendimento}</p>
                        <p><strong>Pós-atendimento:</strong> ${consulta.postAtendimento}</p>
                    </td>
                </tr>
            `;
        });
        tabelaPacientesHtml += '</table>';
        tabelaPacientesDiv.innerHTML = tabelaPacientesHtml;
    } else {
        numeroPacientesDiv.innerHTML = '<p>Nenhum paciente encontrado.</p>';
        tabelaPacientesDiv.innerHTML = '<p>Nenhum dado de paciente encontrado.</p>';
    }
});
