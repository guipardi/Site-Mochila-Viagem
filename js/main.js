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
    
    /* Verificando se o nome do item declarado já existe no array */
    const existe = itens.find( elemento => elemento.nome === nome);

    /* Criando o objeto para criar o elemento, adiciona-lo na lista itens, e setar no localStorage a lista itens. */
    const itemAtual = {
        'nome' : nome,
        'quantidade' : quantidade
    };

    if (existe) {
        itemAtual.id = existe.id;
        
        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else { 
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;

        criaElemento(itemAtual);
        itens.push(itemAtual);
    };

    

    localStorage.setItem('itens', JSON.stringify(itens));

    form.reset();
});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeletar(item.id))

    lista.appendChild(novoItem)
};

function atualizaElemento (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeletar(id) {
    const botao = document.createElement('button');
    botao.innerText = 'x';

    botao.addEventListener('click', function() {  /* Como vou usar o this, não posso usar arrow function */
        deletaElemento(this.parentNode, id);
    });

    return botao;
};

function deletaElemento(elemento, id) {
    elemento.remove();

    itens.splice(itens.findIndex(elemento => {
        elemento.id === id;
    }), 1);

    localStorage.setItem('itens', JSON.stringify(itens));
};
