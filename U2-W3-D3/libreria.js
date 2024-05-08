
const generateList = function (books) {
    const list = document.getElementById('book-list');
    books.forEach((book) => {
        const col = document.createElement('div');
        col.classList.add('col-md-4')
        col.innerHTML = `
            <div class="card mb-4">
                <img src="${book.img}" class="card-img-top" alt="${book.title} >
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.price}€</p>
                    <button class="btn btn-danger discard-btn">Scarta</button>
                    <button class="btn btn-success">Compra!</button>
                </div>
            </div>
        `;
        col.querySelector('.discard-btn').addEventListener('click', function() {
            col.remove();
        });
        list.appendChild(col);
    });
}


const getBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
        if (response.ok) {
            console.log('presi!', response);
            return response.json();
        } else {
            if (response.status === 404) {
                throw new Error('La risorsa richiesta non è stata trovata');
            } else if (response.status === 500) {
                throw new Error('La risposta del server è stata negativa');
            }
        }
    })
    .then((books) => {
        console.log('estratto il body', books);
        generateList(books);
    })
    .catch((err) => {
        console.log('ERRORE', err);
    });
}

getBooks();


