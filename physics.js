const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function end(){
    terminal.close();
}
function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}
function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}
terminal.question("What type of equation are you looking for?",function(str){
  str.toLowerCase();
  if(str == "motion"){
    terminal.question("What are you trying to find? (Type the word out)",function(str){
      str.toLowerCase();
      if(str == "distance"){
        printOptions();
        terminal.question("Type your list now.", function(strcma){
          strcma = convertToArray(strcma);
          if(Number.isNaN(strcma[2])){
            console.log(motion.distance(strcma[1],strcma[3]));
            end();
          }
          else{
            console.log(motion.distance1(strcma[1],strcma[2],strcma[3]));
            end();
          }
        });
      }
      else if(str == "acceleration"){
        printOptions();
        terminal.question("Type your list now.", function(strcma){
          strcma = convertToArray(strcma);
          console.log(motion.acceleration(strcma[1],strcma[3]));
          end();
        });
      }
      else if(str == "time"){
        printOptions();
        terminal.question("Type your list now.", function(strcma){
          strcma = convertToArray(strcma);
          if(Number.isNaN(strcma[3])){
            console.log(motion.time(strcma[0],strcma[1]));
            end();
          }
          else{
            console.log(motion.time1(strcma[3],strcma[2]));
            end();
          }
        });
      }
      else if(str == "velocity"){
        printOptions();
        terminal.question("Type your list now.", function(strcma){
          strcma = convertToArray(strcma);
          if(Number.isNaN(strcma[1])){
            console.log(motion.velocity(strcma[0],strcma[3]));
            end();
          }
          else{
            console.log(motion.velocity1(strcma[3],strcma[2]));
            end();
          }
        });
      }
      else{
        console.log("The motion functions we can solve are distance, acceleration, time, velocity.")
        end();
      }
    });
  }
  else if(str == "energy"){
    terminal.question("What are you trying to find? (Type the word out)",function(str){
      str.toLowerCase();
      if(str == "kinetic energy"){
        printOptions();
        terminal.question("Type your list now.", function(strcma){
          strcma = convertToArray(strcma);
          console.log(energy.kineticEnergy(strcma[1],strcma[4]));
          end();
        });
      }
      else if(str == "mass"){
        printOptions();
        terminal.question("Type your list now.",function(strcma){
          strcma = convertToArray(strcma);
          console.log(energy.mass(strcma[1],strcma[5]));
          end();
        });
      }
      else if(str =="velocity"){
        printOptions();
        terminal.question("Type your list now.",function(strcma){
          strcma = convertToArray(strcma);
          console.log(energy.v(strcma[5],strcma[4]));
          end();
        });
      }
      else{
        console.log("The energy functions we can solve are kinetic energy, mass, and velocity.");
        end();
      }
    });
  }
  else{
    console.log("I am not able to solve this type of equation yet.");
    end();
  }
});
