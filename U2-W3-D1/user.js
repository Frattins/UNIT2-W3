class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }
}

const users = [];

function createUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const location = document.getElementById('location').value;
    
    const user = new User(firstName, lastName, age, location);
    users.push(user);
    
    updateUsersList();
}

function updateUsersList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.firstName} ${user.lastName}, ${user.age} anni, da ${user.location}`;
        userList.appendChild(userItem);
    });
}
function compareAges() {
    if (users.length < 2) {
        document.getElementById('ageComparisonResult').textContent = "Aggiungi almeno due utenti per confrontare le età.";
        return;
    }
    
    const user1 = users[0];
    const user2 = users[1]; // Questo confronta i primi due utenti aggiunti, modifica come preferisci
    
    const result = user1.compareAge(user2);
    document.getElementById('ageComparisonResult').textContent = result;
}
