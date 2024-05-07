// Funzione per salvare il nome nel localStorage
      function saveName() {
        const name = document.getElementById("nameInput").value;
        localStorage.setItem("userName", name);
        displayPreviousValue();
      }

      // Funzione per rimuovere il nome dal localStorage
      function removeName() {
        localStorage.removeItem("userName");
        displayPreviousValue();
      }

      // Funzione per visualizzare il valore precedente sopra l'input field
      function displayPreviousValue() {
        const savedName = localStorage.getItem("userName");
        document.getElementById("previousValue").innerText = savedName
          ? `Valore salvato: ${savedName}`
          : "Nessun nome salvato";
      }

      // Mostra il valore precedente al caricamento della pagina
      displayPreviousValue();

      let counter = parseInt(sessionStorage.getItem("timeCounter")) || 0;

// Aggiorna il contatore ogni secondo
    setInterval(() => {
    counter++;
    sessionStorage.setItem("timeCounter", counter);
    document.getElementById(
        "timeCounter"
    ).innerText = `Tempo trascorso: ${counter} secondi`;
    }, 1000);