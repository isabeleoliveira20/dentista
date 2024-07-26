document.addEventListener('DOMContentLoaded', function() {
    const confirmarEmocaoButton = document.getElementById('confirmarEmocao');
    const acompanharEvolucaoButton = document.getElementById('acompanharEvolucao');
    const avatarCanvas = document.getElementById('avatarCanvas');
    let selectedEmotion = null;


    // Função para carregar dados do localStorage
    function loadData(key) {
        return JSON.parse(localStorage.getItem(key));
    }


    // Função para salvar dados no localStorage
    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }


    // Carregar o avatar
    const storedAvatar = loadData('avatarData');
    if (storedAvatar && storedAvatar.images) {
        storedAvatar.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.style.width = '100px'; // Ajuste o tamanho conforme necessário
            img.style.height = 'auto';
            img.style.position = 'absolute';
            avatarCanvas.appendChild(img);
        });
    }


    // Função para selecionar a nova emoção
    function selectEmotion(element) {
        const emotionImage = element.querySelector('img');
        selectedEmotion = emotionImage.alt;


        // Remove a emoção anterior, se houver
        const existingEmotion = avatarCanvas.querySelector('img[data-part="emocao"]');
        if (existingEmotion) {
            avatarCanvas.removeChild(existingEmotion);
        }


        // Adiciona a nova emoção
        const newEmotionImg = document.createElement('img');
        newEmotionImg.src = emotionImage.src;
        newEmotionImg.alt = selectedEmotion;
        newEmotionImg.dataset.part = 'emocao';
        newEmotionImg.style.width = '100px'; // Ajuste o tamanho conforme necessário
        newEmotionImg.style.height = 'auto';
        newEmotionImg.style.position = 'absolute';
        newEmotionImg.style.left = '150px'; // Ajuste a posição conforme necessário
        newEmotionImg.style.top = '100px'; // Ajuste a posição conforme necessário
        avatarCanvas.appendChild(newEmotionImg);
    }


    // Adicionar eventos de clique às opções de emoção
    const emotionOptions = document.querySelectorAll('.option[data-part="emocao"]');
    emotionOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectEmotion(this);
        });
    });


    // Confirmar emoção e atualizar dados
    confirmarEmocaoButton.addEventListener('click', function() {
        if (!selectedEmotion) {
            alert('Por favor, selecione uma emoção.');
            return;
        }


        const storedCrianca = loadData('crianca');
        if (storedCrianca && storedCrianca.consultas) {
            // Atualiza a última consulta com a nova emoção
            storedCrianca.consultas[storedCrianca.consultas.length - 1].postAtendimento = selectedEmotion;
            saveData('crianca', storedCrianca);
            alert('Emoção pós-atendimento confirmada!');
        } else {
            alert('Nenhuma consulta encontrada.');
        }
    });


    // Navegar para a nova página
    acompanharEvolucaoButton.addEventListener('click', function() {
        window.location.href = 'nova-pagina.php';
    });
});





