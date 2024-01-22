const ansi = require('./ansi');
const readline = require('readline');

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
  }

function karaokeEffect(text, speed = 100, highlightColor = ansi.fgRed, originalColor = ansi.reset) {
        let i=0
        function type(){
        const highlightedText = highlightColor + text[i];
        const remainingText = originalColor + text.substring(i + 1);
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

