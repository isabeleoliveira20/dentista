<?php
require 'config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo '<pre>';
    var_dump($_POST);
    echo '</pre>';
    
    // Receber dados do formulário
    $emailResponsavel = isset($_POST['emailResponsavel']) ? trim($_POST['emailResponsavel']) : null;
    $senhaCrianca = isset($_POST['senhaCrianca']) ? trim($_POST['senhaCrianca']) : null;

    // Verificar se os campos foram preenchidos
    if (empty($emailResponsavel) || empty($senhaCrianca)) {
        echo json_encode(['status' => 'error', 'message' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    try {
        // Procurar pelo usuário no banco de dados
        $stmt = $pdo->prepare('SELECT * FROM criancas WHERE email = ?');
        $stmt->execute([$emailResponsavel]);
        $crianca = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($crianca) {
            // Verificar se a senha está correta
            if (password_verify($senhaCrianca, $crianca['senha'])) {
                // Autenticação bem-sucedida
                echo json_encode(['status' => 'success', 'message' => 'Login bem-sucedido.']);
                // Redirecionar para a página inicial ou espaço infantil
                header('Location: espaco-infantil.php');
                exit;
            } else {
                // Senha incorreta
                echo json_encode(['status' => 'error', 'message' => 'Usuário ou senha incorretos']);
            }
        } else {
            // Usuário não encontrado
            echo json_encode(['status' => 'error', 'message' => 'Usuário não encontrado']);
        }
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Erro ao processar o login: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método de requisição inválido.']);
}
?>



