<?php
include 'includes/class-autoload.inc.php';

$p = new Pagina();

echo($p->exec($_GET['v']));

?>
<script>
<?php
    $id = $_GET['t'];
    $json = $p->exec($_GET['v']);
    // echo "let dados = `{$json}`;";
    echo "let dados = JSON.parse(`$json`);";
?>
console.log(dados)
</script>