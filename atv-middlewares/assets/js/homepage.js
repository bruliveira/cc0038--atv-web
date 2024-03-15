// Function to create a pet card element
function createPetCardElement(pet) {
    const card = document.createElement('div');
    card.classList.add('pet-card');

    const name = document.createElement('h3');
    name.textContent = pet.name;
    card.appendChild(name);

    const species = document.createElement('p');
    species.innerHTML = `<strong>Species:</strong> ${pet.species}`;
    card.appendChild(species);

    const age = document.createElement('p');
    age.innerHTML = `<strong>Age:</strong> ${pet.age}`;
    card.appendChild(age);

    const breed = document.createElement('p');
    breed.innerHTML = `<strong>Breed:</strong> ${pet.breed}`;
    card.appendChild(breed);

    const color = document.createElement('p');
    color.innerHTML = `<strong>Color:</strong> ${pet.color}`;
    card.appendChild(color);

    const owner = document.createElement('p');
    owner.innerHTML = `<strong>Owner:</strong> ${pet.ownerName}`;
    card.appendChild(owner);

    const contact = document.createElement('p');
    contact.innerHTML = `<strong>Contact:</strong> ${pet.contact}`;
    card.appendChild(contact);

    return card;
}

// Function to fetch and populate pets
async function fetchAndPopulatePets() {
    const response = await fetch('/pets');
    const pets = await response.json();
    const featuredPetsContainer = document.getElementById('featured-pets');

    pets.forEach(pet => {
        const petCard = createPetCardElement(pet);
        featuredPetsContainer.appendChild(petCard);
    });
}

// Call function to fetch and populate pets
fetchAndPopulatePets();