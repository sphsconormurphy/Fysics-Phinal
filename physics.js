const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
  if(str == "motion"){
    terminal.question("What are you trying to find?",function(str){
      if(str == "distance"){
        
      }
      else if(str == "acceleration"){

      }
      else if(str == "time"){

      }
      else if(str == "velocity"){

      }
    });
  }
  else if(str == "energy"){
    terminal.question("What are you trying to find?",function(str){
      if(str == "kinetic energy"){

      }
      else if(str == "mass"){

      }
      else if(str =="velocity"){

      }
    });
  }
  else{
    console.log("I am not able to solve this type of equation yet.");
  }
});
