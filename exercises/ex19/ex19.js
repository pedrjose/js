// Testing class

class Animal {
    constructor(species) {
        this.species = species;
    }
}

class Dog extends Animal {
    constructor(species, dogName, dogBreed) {
        super(species);
        this.dogName = dogName;
        this.dogBreed = dogBreed;
    }
}

class Cat extends Animal {
    constructor (species, catName, catBreed) {
        super(species);
        this.catName = catName;
        this.catBreed = catBreed;
    }
}

const myDog = new Dog('Canis lupus familiaris', 'Bobby', 'Bulldog');
const myCat = new Cat('Felis catus', 'Butter', 'Maine Coon');