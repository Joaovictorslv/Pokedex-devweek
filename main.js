let listaSelecaoPokemon = document.querySelectorAll('.pokemon') ;
let pokemoncard = document.querySelectorAll('.card-pokemon');

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const cartaoAberto = document.querySelector('.aberto');
        cartaoAberto.classList.remove('aberto');

        let idPokemonSelecionado = pokemon.attributes.id.value;

        let idDoCartaoPokemonParaAbrir = 'card-' + idPokemonSelecionado;
        let cardPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
        cardPokemonParaAbrir.classList.add('aberto');

        const PokemonAtivoNaLista = document.querySelector('.ativo');
        PokemonAtivoNaLista.classList.remove('ativo');

        let PokemonSelecionadoNaLista =  document.getElementById(idPokemonSelecionado);
        PokemonSelecionadoNaLista.classList.add('ativo');
    })
});