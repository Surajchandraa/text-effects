const custom=require("./custom_colors");

const ansi = require('./ansi');
const readline = require('readline');

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
}

function fadeout(text, speed = 100) {
    let i = 0;

    function applyFade() {
        const fadedText = custom.customFg(255 - i, 255 - i, 255 - i) + text + ansi.reset;

        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);

        process.stdout.write(fadedText);
        i += 1; 

        if (i <= 255) {
            sleepSync(speed);
            applyFade();
        } else {
            readline.clearLine(process.stdout, 0);
            process.stdout.write("\n");
        }
    }

    applyFade();
}




function fadein(text, speed = 100) {
    let i = 255;

    function applyFade() {
        const fadedText = custom.customFg(255 - i, 255 - i, 255 - i) + text + ansi.reset;

        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);

        process.stdout.write(fadedText);
        i -= 1; 

        if (i >= 0) {
            sleepSync(speed);
            applyFade();
        } else {
            readline.clearLine(process.stdout, 0);
            process.stdout.write("\n");
        }
    }

    applyFade();
}


module.exports={fadein,fadeout};