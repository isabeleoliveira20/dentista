document.addEventListener('DOMContentLoaded', function() {
    const confirmarEmocaoButton = document.getElementById('confirmarEmocao');
    const acompanharEvolucaoButton = document.getElementById('acompanharEvolucao');
    const avatarCanvas = document.getElementById('avatarCanvas');
    let selectedEmotion = null;

    function loadData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    const storedAvatar = loadData('avatarData');
    if (storedAvatar && storedAvatar.images) {
        storedAvatar.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.style.width = '100px'; 
            img.style.height = 'auto';
            img.style.position = 'absolute';
            avatarCanvas.appendChild(img);
        });
    }

    function selectEmotion(element) {
        const emotionImage = element.querySelector('img');
        selectedEmotion = emotionImage.alt;

        const existingEmotion = avatarCanvas.querySelector('img[data-part="emocao"]');
        if (existingEmotion) {
            avatarCanvas.removeChild(existingEmotion);
        }

        const newEmotionImg = document.createElement('img');
        newEmotionImg.src = emotionImage.src;
        newEmotionImg.alt = selectedEmotion;
        newEmotionImg.dataset.part = 'emocao';
        newEmotionImg.style.width = '100px';  
        newEmotionImg.style.height = 'auto';
        newEmotionImg.style.position = 'absolute';
        newEmotionImg.style.left = '150px'; 
        newEmotionImg.style.top = '100px'; 
        avatarCanvas.appendChild(newEmotionImg);
    }

    const emotionOptions = document.querySelectorAll('.option[data-part="emocao"]');
    emotionOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectEmotion(this);
        });
    });

    confirmarEmocaoButton.addEventListener('click', function() {
        if (!selectedEmotion) {
            alert('Por favor, selecione uma emoção.');
            return;
        }

        const storedCrianca = loadData('crianca');
        if (storedCrianca && storedCrianca.consultas) {
            storedCrianca.consultas[storedCrianca.consultas.length - 1].postAtendimento = selectedEmotion;
            saveData('crianca', storedCrianca);
            alert('Emoção pós-atendimento confirmada!');
        } else {
            alert('Nenhuma consulta encontrada.');
        }
    });

    acompanharEvolucaoButton.addEventListener('click', function() {
        window.location.href = 'evolucao-infantil.html'; 
    });
});





