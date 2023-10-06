//let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear]

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2, 
   move: function () {
      return Math.floor(Math.random()*11);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.floor(Math.random()*11);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4, 
   move: function () {
      return Math.floor(Math.random()*11);
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {
      return Math.floor(Math.random()*11);
   }
};

let crew = [superChimpOne , superChimpTwo , salamander , dog , waterBear];

/*for (let i = 0; i < crew.length; i++){
   let output = "";

   for (items in crew) {
       output += `${crew.name[items][i]} is a ${crew.species[items][i]}. They are ${crew.age[items][i]} years old and ${crew.mass[items][i]} kilograms. Their ID is ${crew.astronautID[items][i]}. ` ;
       
   }
   return console.log(output);
};*/

 console.log (`${superChimpOne.name} is a ${superChimpOne.species}. They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms. Their ID is ${superChimpOne.astronautID}. `) ;

 console.log (`${superChimpTwo.name} is a ${superChimpTwo.species}. They are ${superChimpTwo.age} years old and ${superChimpTwo.mass} kilograms. Their ID is ${superChimpTwo.astronautID}. `) ;

 console.log (`${salamander.name} is a ${salamander.species}. They are ${salamander.age} years old and ${salamander.mass} kilograms. Their ID is ${salamander.astronautID}. `) ;

 console.log (`${dog.name} is a ${dog.species}. They are ${dog.age} years old and ${dog.mass} kilograms. Their ID is ${dog.astronautID}. `) ;

 console.log (`${waterBear.name} is a ${waterBear.species}. They are ${waterBear.age} years old and ${waterBear.mass} kilograms. Their ID is ${waterBear.astronautID}. `) ;




// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function fitnessTest(arr) {
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++){
       numSteps = 0;
       turns = 0; 
       while(numSteps < 20){
       numSteps += arr[i].move();
       turns++;
       }
       results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results
}
console.log(fitnessTest(crew))
  

