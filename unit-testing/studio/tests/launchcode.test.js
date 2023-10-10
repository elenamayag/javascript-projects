// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  // Write your unit tests here!
  it("should have a property called organization", function () {
    expect(launchcode.organization).toEqual("nonprofit");
  });
  it("should have a property called executiveDirector", function() {
    expect(launchcode.excutiveDirector).toEqual("Jeff");
  });
  it ("should have a property called percentageCoolEmployees", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  it("should have a property called programsOffered", function() {
    expect(launchcode.programsOffered[0]).toEqual("LC101");
    expect(launchcode.programsOffered[1]).toEqual("LaunchCode Women+");
    expect(launchcode.programsOffered[2]).toEqual("CoderCamp");
    expect(launchcode.programsOffered.length).toEqual(3);
  });
});

  describe("Should have a method, launchOutput, which", function () {

    it("should reuturn 'Launch!' for numbers evenly divisible by only 2", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });

    it("should reuturn 'Code!' for numbers evenly divisible by only 3", function() {
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });

    it("should reuturn 'Rocks!' for numbers evenly divisible by only 5", function() {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
    
    it("should reuturn 'LaunchCode!' for numbers evenly divisible by both 2 and 3 ", function() {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });

    it("should reuturn 'Code Rocks!' for numbers evenly divisible by both 3 and 5 ", function() {
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });

    it("should reuturn 'Launch Rocks!' for numbers evenly divisible by both 2 and 5 ", function() {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!");
    });

    it("should reuturn 'LaunchCode Rocks!' for numbers evenly divisible by 2, 3, and 5 ", function() {
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });

    it("should reuturn 'Rutabagas! That doesn't work.' for numbers NOT evenly divisible by 2, 3, or 5 ", function() {
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });

  });

