document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o cartCount no localStorage se ainda não existir
    if (localStorage.getItem('cartCount') === null) {
        localStorage.setItem('cartCount', '0');
    }

    // Função para atualizar o número de itens no carrinho
    function updateCartCount() {
        let cartCount = localStorage.getItem('cartCount');
        if (cartCount === null) {
            cartCount = '0'; // Garante que cartCount nunca seja null
            localStorage.setItem('cartCount', cartCount);
        }
        document.getElementById('cartCount').textContent = cartCount;
    }

    // Atualiza o número de itens ao carregar a página
    updateCartCount();

    // Adiciona evento de clique para o botão de "Comprar"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
            cartCount += 1;
            localStorage.setItem('cartCount', cartCount);
            updateCartCount();
        });
    });

    // Adiciona evento de clique para o botão do carrinho
    document.getElementById('cartButton').addEventListener('click', function() {
        window.location.href = 'carrinho.html';
    });
});
