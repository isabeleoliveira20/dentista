<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Segundo Espaço Infantil</title>
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
    <div class="container">
        <h1>Como você se sente após a consulta?</h1>
        <div id="avatarCanvas" class="avatar-canvas">
            <h2>Seu Avatar</h2>
            <!-- O avatar será carregado aqui -->
        </div>
        <div class="options">
            <h2>Selecione a nova emoção:</h2>
            <div class="option" data-part="emocao">
                <img src="./imagens/alegre.png" alt="Alegre" id="alegre">
                <p>Alegre</p>
            </div>
            <div class="option" data-part="emocao">
                <img src="./imagens/triste.png" alt="Triste" id="triste">
                <p>Triste</p>
            </div>
            <div class="option" data-part="emocao">
                <img src="./imagens/raiva.png" alt="Raiva" id="raiva">
                <p>Raivoso/a/e</p>
            </div>
            <div class="option" data-part="emocao">
                <img src="./imagens/ansioso.png" alt="Ansioso" id="ansioso">
                <p>Ansioso/a/e</p>
            </div>
            <div class="option" data-part="emocao">
                <img src="./imagens/desconfiado.png" alt="Desconfiado" id="desconfiado">
                <p>Desconfiado/a/e</p>
            </div>
            <div class="option" data-part="emocao">
                <img src="./imagens/medo.png" alt="Medo" id="medo">
                <p>Amedrontado/a/e</p>
            </div>
        </div>
        <button id="confirmarEmocao">Confirmar Emoção</button>
        <button id="acompanharEvolucao">Acompanhar Evolução</button>
    </div>
    <script src="scripts/segundo-espaco-infantil.js"></script>
</body>
</html>

