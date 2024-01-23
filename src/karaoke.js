const ansi = require('./ansi');
const readline = require('readline');

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
  }

  let defaultconfig={
    bg:ansi.fgWhite,
    fg:ansi.fgWhite,
    style:ansi.fgWhite
  }

function karaoke(text, speed = 100, objectparams) {
        let i=0;
        let animationParams={...defaultconfig, ...objectparams}
        function type(){
        const highlightedText = animationParams.style+animationParams.bg+animationParams.fg + text[i]+ansi.reset;
        const remainingText = text.substring(i + 1);
        const output = highlightedText + remainingText;

        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);

        process.stdout.write(output);
        i++;
        if(i<text.length){
            sleepSync(speed);
            type()
        }
        else{
            
            readline.clearLine(process.stdout, 0);
            process.stdout.write("\n");
            
        }

    }
    type();

   
}

module.exports=karaoke;