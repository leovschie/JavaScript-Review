//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

class Animal {
  constructor (species, name, legs, color, food) {

   
   this.species = species;
   this.name = name;
   this.legs = legs;
   this.color = color;
   this.food = food;

 }
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

function personCreator(name, age, height, gender){
  let object = {
    name: name ,
    age: age ,
    height: height ,
    gender: gender,
  }
  return object;
}


//Create a animal array and a person array.

let animal = [];
let person = [];


//Create two instances of Animal and push those into your animal array

let animalOne = new Animal ('cow', 'johnny', 4, 'brown', ['hay', 'little cows']);
let animalTwo = new Animal ('cat', 'susan', 4, 'violet', ['dogs', 'metal', 'tuna'])

animal.push(animalOne, animalTwo);


//Create two instances of person and push those into your person array.

let person1 = personCreator('Leo', 26, '180cm', 'male');
let person2 = personCreator('Kanye', 70, '175cm', 'male');

person.push(person1, person2);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function(text) {
  alert(`${this.name} ate ${this.food[Math.floor(Math.random() * this.food.length)]}`)
  }


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  
  /* No you could not, because with the constructor class, all instances are children of the parent class, so they take over the properties  from their parent. By adding to the constructor class, all instances can be altered. However, the person instances are not connected and do not receive properties from a parent as they don't have one!


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
      New creates an instance of the constructor class. In other words, it creates an object that takes on the properties of the constructor.
  2) What's a good way to describe the keyword 'this'
      As a connector. It connects the code to the current object. In other words, it specifies the context of the code you write - what object it refers to.
  3) Can a normal function which creates an object and then returns that object use the prototype?
      Yes, all functions have prototypes (however, i'm not quite sure what's referred to here as "the" prototype)
  4) What happens if you forget to use 'new' when calling a constructor?
    You get a Type error. The class constructor cannot be invoked without 'new'

*/