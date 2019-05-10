//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

  //Your code here
  let favoriteThings = {
    band: "The Kills",
    food: "Indian",
    person: "Charlotte",
    book: "The Wind-Up Bird Chronicle",
    movie: "The Lord of the Rings",
    holiday: "Christmas"
  }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here

  favoriteThings.car = "Pussy Wagon";
  favoriteThings.brand = "COS";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  //Your code here

  favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

  //Your code here

  alert(favoriteThings.person);
  alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here

  
let truthy = function (obj) {
  for (let i in obj) {
  if (obj[i] === null || obj[i] === undefined || obj[i] === false || obj[i] === 0 || obj[i] === "") {
  delete obj[i];
  }
 } return obj;
}

truthy(user)



//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here

user.name = "Leo van Schie";
user.pwHash = "abcd123";
user.username = "Leovschie1";


//Now console.log your object and make sure it looks right.

  console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here

  let methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  //Your code here

  methodCollection = {
    logHello: function () {console.log("Hello")},
    alertHello: function () {alert("Hello")}
    };



//Now call your alertHello and logHello methods. 

  methodCollection.alertHello();
  methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(string) {
  let vowelObject = {
    a: 0, e: 0, i: 0, o: 0, u: 0
  };

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i).toLowerCase();

    if (vowelObject.hasOwnProperty(char)) {
      vowelObject[char] ++;
      }
    }
return vowelObject;
}


