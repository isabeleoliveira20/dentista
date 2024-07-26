// espaco-infantil.js

document.addEventListener('DOMContentLoaded', () => {
    const avatarCanvas = document.getElementById('avatarCanvas');
    const confirmarAvatarButton = document.getElementById('confirmarAvatar');
    let selectedEmotion = null;

    // Função para adicionar a imagem ao avatarCanvas
    function addImageToAvatar(element) {
        const part = element.getAttribute('data-part');
        const imageSrc = element.querySelector('img').src;

        // Cria um novo elemento de imagem
        const newElement = document.createElement('div');
        newElement.classList.add('dropped');
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = part;
        newElement.appendChild(imgElement);
        avatarCanvas.appendChild(newElement);

        // Se a parte for emoção, armazena a emoção selecionada
        if (part === 'emocao') {
            selectedEmotion = imgElement.alt;
        }
    }

    // Função para definir a emoção selecionada
    function setEmotion(element) {
        const emotion = element.querySelector('img').alt;
        selectedEmotion = emotion;
    }

    // Configura o clique para adicionar imagens ao avatar
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            addImageToAvatar(this);
        });
    });

    // Função para confirmar o avatar
    confirmarAvatarButton.addEventListener('click', () => {
        if (!selectedEmotion) {
            alert('Por favor, selecione uma emoção antes de confirmar.');
            return;
        }

        // Enviar o avatar para o servidor ou armazenar localmente
        // Por exemplo, salvando os dados no localStorage
        const avatarData = {
            emotion: selectedEmotion,
            images: Array.from(avatarCanvas.querySelectorAll('img')).map(img => img.src)
        };
        localStorage.setItem('avatarData', JSON.stringify(avatarData));

        // Redirecionar para a próxima página
        window.location.href = 'em-atendimento.php?emocao=' + encodeURIComponent(selectedEmotion);
    });
});



