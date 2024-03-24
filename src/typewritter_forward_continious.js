
const { read } = require("fs");
const ansi=require("./ansi");
const readline = require("readline")

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
  }

let defaultConfig = {
    bg: ansi.fgWhite,
    fg: ansi.fgWhite,
    style: ansi.fgWhite,
  };

  function tw_forward(text, speed = 50, objectparams) {
    
    let index = 0;
    let animationParams = { ...defaultConfig, ...objectparams };
    function typeSync() {
      process.stdout.write(animationParams.style+animationParams.bg+animationParams.fg+text[index]+ansi.reset);
      index++;
  
      if (index < text.length) {
        sleepSync(speed);
        typeSync();
      } else {
        readline.clearLine(process.stdout,0)
        readline.cursorTo(process.stdout, 0);
      }
    }
  
    typeSync();
  }
  

function typewritterforwardcont(text,speed,objectparams){
    let animationParams = { ...defaultConfig, ...objectparams };
    let suraj = setInterval(() => {
        tw_forward(text, speed, animationParams); // Pass a function reference
      }, speed);
    return function stopScrolling(){
        clearInterval(suraj);
        process.stdout.write( animationParams.style +
            animationParams.bg +
            animationParams.fg +
            text +
            ansi.reset)
        process.stdout.write('\n'); 

    }
}

let objet={
    bg:ansi.bgBlack,
    fg:ansi.fgRed,
    style:ansi.bright
}

module.exports=typewritterforwardcont;