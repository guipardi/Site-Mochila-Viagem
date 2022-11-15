const form = document.getElementById('novo-item');
const lista = document.querySelector('.lista');
const itens = []

form.addEventListener('submit', (event) => {

    event.preventDefault();

    /* console.log(event.target.elements['nome'].value);
    console.log(event.target.elements['quantidade'].value);*/

    /* criaElemento(event.target.elements['nome'].value, event.target.elements['quantidade'].value) */

    const nome = event.target.elements['nome'].value;
    const quantidade = event.target.elements['quantidade'].value;
    adicionaElemento(criaElemento(nome, quantidade), nome, quantidade);

    form.reset();
});

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    return novoItem;
};

function adicionaElemento(elemento, nome, quantidade) {
    lista.appendChild(elemento);

    const itemAtual = {
        'nome' : nome,
        'quantidade' : quantidade
    };

    itens.push(itemAtual);

    localStorage.setItem('item', JSON.stringify(itens));
};
