const dogOne = {
    dogName: "Abby",
    breed: "SharPei",
    age: 7
};

const dogTwo = {
    dogName: "Akino",
    breed: "Husky",
    age: 5
};

const dogThree = {
    dogName: "Bailey",
    breed: "Labrador",
    age: 3
};

const dogFour = {
    dogName: "Charlie",
    breed: "Beagle",
    age: 6
};

const dogFive = {
    dogName: "Daisy",
    breed: "Golden Retriever",
    age: 4
};

const dogSix = {
    dogName: "Ella",
    breed: "Bulldog",
    age: 8
};

const dogSeven = {
    dogName: "Finn",
    breed: "Poodle",
    age: 2
};

const dogEight = {
    dogName: "Ginger",
    breed: "Cocker Spaniel",
    age: 9
};

const dogNine = {
    dogName: "Harley",
    breed: "Terrier",
    age: 5
};

const dogTen = {
    dogName: "Izzy",
    breed: "Boxer",
    age: 7
};

const allDogs = [dogOne, dogTwo, dogThree, dogFour, dogFive, dogSix, dogSeven, dogEight, dogNine, dogTen];

window.findOlderDogs = function() {
    const minAgeInput = document.querySelector("#minAge").value.trim();
    const minAge = parseInt(minAgeInput, 10);

    if (isNaN(minAge) || minAge < 0) {
        document.querySelector(".dogList").textContent = "Please enter a valid number for the minimum age.";
        return; 
    }
    let output = "";
    let foundAny = false; 

    for (let i = 0; i < allDogs.length; i++) {
        if (allDogs[i].age > minAge) {
            output += `${allDogs[i].dogName} - ${allDogs[i].breed}, ${allDogs[i].age} year old/n`;
            foundAny = true; 
        }
    }

    if (!foundAny) {
        displayArea.textContent = `No dogs are older than ${minAge} years. `;

    } else {
        displayArea.textContent = output; 
    }
};

window.randomDog = function() {
    const randomNumber = Math.random() * allDogs.length; 
    const index = parseInt(randomNumber); 
    const dog = allDogs[index]; 
    document.querySelector(".dogList").textContent = `${dog.dogName} - ${dog.breed}, ${dog.age} years old`;

};