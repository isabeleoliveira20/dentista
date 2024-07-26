<?php
$dsn = 'mysql:host=localhost;dbname=dentinho_feliz';
$username = 'root';  // Substitua pelo seu usuário do MySQL
$password = '33655049Bel#';  // Substitua pela sua senha do MySQL

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>
