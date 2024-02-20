const { time } = require('console');
const readline = require('readline');

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
  }


function gen_random(max,min){
    let rand=Math.floor(Math.random()*(max-min+1))+min
    return rand;
}

function ascii(number){
    return String.fromCharCode(number);
}

function glitch1(text,speed){

    let index=0;
    function typeSync(){
        
        while (index<text.length){
            
            process.stdout.write(ascii(gen_random(126,32)));
            sleepSync(speed);
            readline.cursorTo(process.stdout, index);
            process.stdout.write(text.charAt(index));
            readline.clearLine(process.stdout,1);
            sleepSync(speed);
            index++;

        }
        console.log()

    }


    typeSync()
}

module.exports=glitch1;