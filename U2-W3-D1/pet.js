class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static haveSameOwner(pet1, pet2) {
        return pet1.ownerName === pet2.ownerName;
    }
}

const pets = [];

function createPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value
    const breed = document.getElementById('breed').value;
    
    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);
    
    updatePetsList();
}

function updatePetsList() {
    const petList = document.getElementById('petList');
    petList.innerHTML = '';
    pets.forEach(pet => {
        const petItem = document.createElement('li');
        petItem.textContent = `${pet.petName}, ${pet.species} (${pet.breed}), proprietario: ${pet.ownerName}`;
        petList.appendChild(petItem);
    });
}

function checkSameOwner() {
    if (pets.length < 2) {
        document.getElementById('ownerCheckResult').textContent = "Aggiungi almeno due pets per verificare i proprietari.";
        return;
    }
    
    const pet1 = pets[0];
    const pet2 = pets[1]; // Questo confronta i primi due pets aggiunti, modifica come preferisci
    
    const sameOwner = Pet.haveSameOwner(pet1, pet2);
    document.getElementById('ownerCheckResult').textContent = sameOwner ? "I due pets hanno lo stesso proprietario." : "I due pets non hanno lo stesso proprietario.";
}
