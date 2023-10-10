
let launchcode = {
 organization: "nonprofit", 
 excutiveDirector: "Jeff",
 percentageCoolEmployees: 100,
 programsOffered: ["LC101", "LaunchCode Women+", "CoderCamp"],
 launchOutput: function (num) {
    let result = "";
    if (num % 2 === 0) {
        result += "Launch";
    } 
    if (num % 3 === 0) {
        result += "Code";
    } 
    if (num % 5 === 0 ){
        if (result.length > 0) {
            result += " ";
        }
        result += "Rocks";
    }
    if (result.length === 0) {
        return "Rutabagas! That doesn't work."
    } else {
     result += "!";
    }
    if (result === "Launch Rocks") {
        result += "  (CRASH!!!!)";
    }

    return result;
  }
};

module.exports = launchcode;

 