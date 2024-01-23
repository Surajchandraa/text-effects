function fgRGB(red, green, blue) {
    
    return `\x1b[38;2;${red};${green};${blue}m`;
}

const ansi = require('./ansi');
const readline = require('readline');

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
}

function fadeToDarkEffect(text, speed = 100) {
    let i = 0;

    function applyFade() {
        const fadedText = fgRGB(255 - i, 255 - i, 255 - i) + text + ansi.reset;

        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);

        process.stdout.write(fadedText);
        i += 5; 

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

fadeToDarkEffect("Text with fading effect");
