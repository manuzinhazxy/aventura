const avanca = document.querySelectorA11('.btn-proximo');

avanca.forEact(button => {
    button.addEventListener('click', function()){
        const atua = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    }
})