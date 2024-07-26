<?php
require 'config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber dados do formulário
    $nomeCrianca = isset($_POST['nomeCrianca']) ? trim($_POST['nomeCrianca']) : null;
    $idadeCrianca = isset($_POST['idadeCrianca']) ? trim($_POST['idadeCrianca']) : null;
    $nomeResponsavel = isset($_POST['nomeResponsavel']) ? trim($_POST['nomeResponsavel']) : null;
    $emailResponsavel = isset($_POST['emailResponsavel']) ? trim($_POST['emailResponsavel']) : null;
    $senhaCrianca = isset($_POST['senhaCrianca']) ? trim($_POST['senhaCrianca']) : null;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (empty($nomeCrianca) || empty($idadeCrianca) || empty($nomeResponsavel) || empty($emailResponsavel) || empty($senhaCrianca)) {
        echo json_encode(['status' => 'error', 'message' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    // Hash da senha
    $hashedSenha = password_hash($senhaCrianca, PASSWORD_BCRYPT);

    try {
        // Preparar e executar a inserção dos dados
        $stmt = $pdo->prepare('INSERT INTO criancas (nome, idade, responsavel, email, senha) VALUES (?, ?, ?, ?, ?)');
        $stmt->execute([$nomeCrianca, $idadeCrianca, $nomeResponsavel, $emailResponsavel, $hashedSenha]);

        // Redirecionar para a página de login
        header('Location: paginainicial.php');
        exit;
    } catch (PDOException $e) {
        // Em caso de erro, enviar mensagem de erro
        echo json_encode(['status' => 'error', 'message' => 'Erro ao cadastrar: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método de requisição inválido.']);
}
?>








