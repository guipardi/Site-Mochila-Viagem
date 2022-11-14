const form = document.getElementById('novo-item');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    console.log(event.target.elements['nome'].value);
    console.log(event.target.elements['quantidade'].value);

});
