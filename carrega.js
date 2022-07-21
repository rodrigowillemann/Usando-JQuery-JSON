//Carregar dados dos produtos
$(document).ready(function() {
    
    //Busca dados de um arquivo JSON
    $.getJSON('jogos.json', function(dados) {
        //Insere código HTML dentro da página
        $('#produtos').html('<p>Produto 1: '+ dados.produto1 + '</p>');
        //Acrescenta novos dados na div 'produto' -> append
        $('#produtos').append('<br><p>Preço: '+ dados.preco1 + '</p>');
    });
});