<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aqui é o Espaço Infantil, crie você mesmo!</title>
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
    <div class="container">
        <h1>Seu avatar</h1>
        <div id="avatarBuilder">
            <!-- Adicione aqui as imagens para construção do avatar -->
            <div class="options">
                <h2>Sua cor de pele?</h2>
                <div class="option" draggable="true" data-part="pele">
                    <img src="./imagens/peleBranca.png" alt="Branca" id="peleBranca">
                    <p>Branca</p>
                </div>
                <div class="option" draggable="true" data-part="pele">
                    <img src="./imagens/peleParda.png" alt="Parda" id="peleParda">
                    <p>Parda</p>
                </div>
                <div class="option" draggable="true" data-part="pele">
                    <img src="./imagens/pelePreta.png" alt="Preta" id="pelePreta">
                    <p>Preta</p>
                </div>
            </div>

            <div class="options">
                <h2>Seu cabelo?</h2>
                <div class="option" draggable="true" data-part="cabelo">
                    <img src="./imagens/crespoCurto.png" alt="Crespo Curto" id="crespoCurto">
                    <p>Crespo Curto</p>
                </div>
                <div class="option" draggable="true" data-part="cabelo">
                    <img src="./imagens/crespoLongo.png" alt="Crespo Longo" id="crespoLongo">
                    <p>Crespo Longo</p>
                </div>
                <div class="option" draggable="true" data-part="cabelo">
                    <img src="./imagens/lisoCurto.png" alt="Liso Curto" id="lisoCurto">
                    <p>Liso Curto</p>
                </div>
                <div class="option" draggable="true" data-part="cabelo">
                    <img src="./imagens/lisoLongo.png" alt="Liso Longo" id="lisoLongo">
                    <p>Liso Longo</p>
                </div>
            </div>

            <div class="options">
                <h2>O que gosta de vestir?</h2>
                <div class="option" draggable="true" data-part="roupa">
                    <img src="./imagens/vestido1.png" alt="Vestido 1" id="vestido1">
                    <p>Vestido 1</p>
                </div>
                <div class="option" draggable="true" data-part="roupa">
                    <img src="./imagens/vestido2.png" alt="Vestido 2" id="vestido2">
                    <p>Vestido 2</p>
                </div>
                <div class="option" draggable="true" data-part="roupa">
                    <img src="./imagens/macacao.png" alt="Macacão" id="macacao">
                    <p>Macacão</p>
                </div>
                <div class="option" draggable="true" data-part="roupa">
                    <img src="./imagens/sapato.png" alt="Sapato" id="sapato">
                    <p>Sapato</p>
                </div>
            </div>

            <div class="options">
                <h2>Como está se sentindo antes da consulta?</h2>
                <h2></2>
                <div class="option" draggable="true" data-part="emocao">
                    <img src="./imagens/alegre.png" alt="Alegre" id="alegre">
                    <p>Alegre</p>
                </div>
                <div class="option" draggable="true" data-part="emocao">
                    <img src="./imagens/triste.png" alt="Triste" id="triste">
                    <p>Triste</p>
                </div>
                <div class="option" draggable="true" data-part="emocao">
                    <img src="./imagens/raiva.png" alt="Raiva" id="raiva">
                    <p>Raivoso/a/e</p>
                </div>
                <div class="option" draggable="true" data-part="emocao">
                    <img src="./imagens/ansioso.png" alt="Ansioso" id="ansioso">
                    <p>Ansioso/a/e</p>
                </div>
                <div class="option" draggable="true" data-part="emocao">
                    <img src="./imagens/medo.png" alt="Medo" id="medo">
                    <p>Amedrontado/a/e</p>
                </div>
            </div>

            <div id="avatarCanvas" class="avatar-canvas">
                <!-- Área onde o avatar será montado -->
                <h2>Construa seu Avatar aqui!</h2>
            </div>
            <button id="confirmarAvatar">Confirmar Avatar</button>
        </div>
    </div>
    <script src="scripts/espaco-infantil.js"></script>
</body>
</html>

