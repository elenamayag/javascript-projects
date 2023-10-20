const test = require('../checkFive.js');

const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("This test displays if the returned vaule is less then 5, but is a positive number. should reuturn 'is less than 5.' for numbers 1, 2, 3, and 4.", function() {
      let output = checkFive(2);   
      expect(output).toEqual("2 is less than 5.");
       });
   

   test("This test displays if the returned vaule is EXACTLY 5", function() {
      let output = checkFive(2)
         expect(output).toEqual("2 is NOT equal than 5.");
       });

   test("This test displays if the returned vaule is more then 5, but not exactly 5.", function() {
      let output = checkFive(2)
         expect(output).toEqual("is more than 5.");
       });
   


}); 