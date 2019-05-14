/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(array, chicken) {
  let firstName = array[0];
  chicken(firstName);
}

first(names, function (firstName) {
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last(array, chicken) {
  let lastName = array[6];
  chicken(lastName);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function (lastName) {
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.

function contains(string, array, callback) {
  let yes = array.includes(string);
  callback(yes)
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function (yes) {
  if (yes) {
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1, 2, 3, 4, 5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function (num) {
  return num * 2; //returns an array of [2,4,6,8,10]
});


function map(array, funky) {
  let array2 = array.slice(0, array.length);
  for (let x = 0; x < array2.length; x++) {
    array2[x] = funky(array2[x]);
  }
  return array2
}






/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function (uniqArr) {
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

function uniq(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let match;
    for (let y = 0; y < newArray.length; y++) {
      if (array[i] === newArray[y]) {
        match = true;
      }
    }
    if (match !== true) {
      newArray.push(array[i]);
    }
  }
  func(newArray);
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function (item, indice) {
  console.log('The item in the ' + indice + 'position is ' + item)
});


function each(array, callback) {
  array.forEach((item, indice) => callback(item, indice))
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function (user) {
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});

function getUserById(userId, array, callbackie) {
  let user;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === userId) {
      user = array[i];
    }
  }
  callbackie(user);
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers = [1, 2, 3, 4, 5, 6];
find(numbers, function (num) {
  return num % 2 == 0; //should return 2
})

function find(array, callby) {
  let numba;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      numba = array[i]
      return numba
    }
    callby(numba);
  }
}