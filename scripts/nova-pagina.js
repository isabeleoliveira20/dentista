document.addEventListener('DOMContentLoaded', function() {
    const dadosPacienteDiv = document.getElementById('dadosPaciente');
    const relatorioConsultasDiv = document.getElementById('relatorioConsultas');

    // Função para carregar dados do localStorage
    function loadData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    // Carregar dados do paciente
    const paciente = loadData('crianca');

    if (paciente) {
        // Exibir dados do paciente
        const dadosPacienteHtml = `
            <h2>Dados do Paciente</h2>
            <p>Nome: ${paciente.nome}</p>
            <p>Idade: ${paciente.idade}</p>
            <!-- Adicione outros dados do paciente aqui -->
        `;
        dadosPacienteDiv.innerHTML = dadosPacienteHtml;

        // Exibir relatório de consultas
        let consultasHtml = '<h2>Relatório de Consultas</h2>';
        paciente.consultas.forEach((consulta, index) => {
            consultasHtml += `
                <div class="consulta">
                    <h3>Consulta ${index + 1}</h3>
                    <p><strong>Pré-atendimento:</strong> ${consulta.preAtendimento}</p>
                    <p><strong>Pós-atendimento:</strong> ${consulta.postAtendimento}</p>
                </div>
            `;
        });
        relatorioConsultasDiv.innerHTML = consultasHtml;
    } else {
        dadosPacienteDiv.innerHTML = '<p>Nenhum dado de paciente encontrado.</p>';
        relatorioConsultasDiv.innerHTML = '<p>Nenhuma consulta encontrada.</p>';
    }
});
