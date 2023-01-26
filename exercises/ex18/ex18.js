// Write a JavaScript program to list the properties of a JavaScript object.

// 'Person' is a prototype of how the objects must be and which functions they will have
const person = {
    isHuman: false,
    nameHuman: 'WALL-E',
    personProperties: function () {
        console.log(`My name is ${this.nameHuman} and I'm human: ${this.isHuman}`);
    }
}

// Every object create of this way will have a property called '__proto__' that points to the original prototype
const father = Object.create(person); father.nameHuman = `Homer`; father.isHuman = true;
const mother = Object.create(person); mother.nameHuman = `Marge`; mother.isHuman = true;
const son = Object.create(person); son.nameHuman = `Bart`; son.isHuman = true;

father.personProperties(); mother.personProperties(); son.personProperties();