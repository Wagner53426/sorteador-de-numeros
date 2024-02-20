function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);  
    let resultado = document.getElementById('resultado');

   let sorteados = [];
   let numero;

   for(i = 0; i < quantidade; i++){
        numero = oberNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){ //Não deixa repitir os números
            numero = oberNumeroAleatorio(de,ate)
        }

        sorteados.push(numero);
   }

   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
   aleterarStatusBotao();
   
}

function oberNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value ='';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    aleterarStatusBotao();
}