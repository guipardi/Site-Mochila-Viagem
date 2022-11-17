const form = document.getElementById('novo-item');
const lista = document.querySelector('.lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

/* Percorrendo todos os intens do localStorage, assim que a página é carregada, e adicionando todos eles usando a função criaElemento. */
itens.forEach( (elemento) => {
   criaElemento(elemento)
});

form.addEventListener('submit', (event) => {

    event.preventDefault();

    /* Buscando os dados passados no formulário. */
    const nome = event.target.elements['nome'].value;
    const quantidade = event.target.elements['quantidade'].value;
    
    /* Criando o objeto para criar o elemento, adiciona-lo na lista itens, e setar no localStorage a lista itens. */
    const itemAtual = {
        'nome' : nome,
        'quantidade' : quantidade
    };
    
    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens));

    form.reset();
});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem)
};
