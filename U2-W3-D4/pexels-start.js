const getCats = function () {
    // Recuperiamo la lista di eventi attualmente nel database
    fetch('https://api.pexels.com/v1/search?query=cats', {
      method: 'GET',
      headers: {
        Authorization: "easHVlAXkS2lDYYVLNyrUJrcbgdll7jzmfbWSfo8qT4I7fx2pY0MEzPp"
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Riceviamo l'oggetto JSON
      } else {
        throw new Error('Errore nella risposta del server');
      }
    })
    .then((data) => {
      console.log('ARRAY!', data); // Verifica la struttura dell'oggetto
      const arrayOfCats = data.photos; // Estrai l'array 'photos'
      const row = document.getElementById('events-row');
      arrayOfCats.forEach((cat) => {
        const newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.innerHTML = `
          <div class="card h-100 d-flex flex-column">
            <img src="${cat.src.medium}" alt="${cat.photographer}">
            <div class="card-body d-flex flex-column justify-content-around">
              <h5 class="card-title">${cat.id}</h5>
              <p class="card-text">${cat.photographer}</p>
              <div class="d-flex justify-content-between">
                <button class="btn btn-primary">Edit</button>
                <a href="${cat.url}" class="btn btn-info">INFO</a>
              </div>
            </div>
          </div>
        `;
        row.appendChild(newCol);
      });
    })
    .catch((err) => {
      console.log('ERRORE!', err);
    });
  }

getCats();