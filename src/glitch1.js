const readline = require('readline');
const ansi=require('./ansi');

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

let defaultconfig={
    bg:ansi.fgWhite,
    fg:ansi.fgWhite,
    style:ansi.fgWhite
  }

function glitch1(text,speed,obj){

    let index=0;
    let animationParams={...defaultconfig, ...obj};
    function typeSync(){
        
        while (index<text.length){
            
            process.stdout.write(animationParams.style+animationParams.bg+animationParams.fg+ascii(gen_random(126,32))+ansi.reset);
            sleepSync(speed);
            readline.cursorTo(process.stdout, index);
            process.stdout.write(animationParams.style+animationParams.bg+animationParams.fg+text.charAt(index)+ansi.reset);
            readline.clearLine(process.stdout,1);
            sleepSync(speed);
            index++;

        }
        console.log()

    }


    typeSync()
}

module.exports=glitch1;