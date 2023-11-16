<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // フォームから送信されたIPアドレスを取得
    $ipAddress = $_POST['ipAddress'];

    // Pingコマンドを実行し、結果を取得
    $pingResult = shell_exec("ping -c 4 $ipAddress"); // ここで `-c 4` は4回Pingを送信することを示しています

    // Pingの結果を表示
    echo "<pre>$pingResult</pre>"; // <pre>タグを使用して改行を保持して表示します
}
?>
