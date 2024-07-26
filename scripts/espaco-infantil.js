document.addEventListener('DOMContentLoaded', () => {
    const avatarCanvas = document.getElementById('avatarCanvas');
    const confirmarAvatarButton = document.getElementById('confirmarAvatar');
    let selectedEmotion = null;

    function addImageToAvatar(element) {
        const part = element.getAttribute('data-part');
        const imageSrc = element.querySelector('img').src;
        const newElement = document.createElement('div');
        newElement.classList.add('dropped');
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = part;
        newElement.appendChild(imgElement);
        avatarCanvas.appendChild(newElement);

        if (part === 'emocao') {
            selectedEmotion = imgElement.alt;
        }
    }

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            addImageToAvatar(this);
        });
    });

    confirmarAvatarButton.addEventListener('click', () => {
        if (!selectedEmotion) {
            alert('Por favor, selecione uma emoção antes de confirmar.');
            return;
        }

        const avatarData = {
            emotion: selectedEmotion,
            images: Array.from(avatarCanvas.querySelectorAll('img')).map(img => img.src)
        };
        localStorage.setItem('avatarData', JSON.stringify(avatarData));

        window.location.href = 'em-atendimento.html?emocao=' + encodeURIComponent(selectedEmotion);
    });
});
