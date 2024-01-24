const ansi=require("./ansi")
const readline = require("readline")

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

function tw_back(text, speed = 50,objectparams) {
    let index = text.length - 1;
    let animationParams={...defaultconfig, ...objectparams}

    function type() {
        const originalString = " ";
        const repeatedString = originalString.repeat(index);

        process.stdout.write(repeatedString);

        if (index >= 0) {
            process.stdout.write(animationParams.style+animationParams.bg+animationParams.fg+text[index]+ansi.reset);
            readline.cursorTo(process.stdout, 0);
            index--;

           
            if (index >= 0) {
                sleepSync(speed)
                type()
            } else {
                process.stdout.write('\n');
                
            }
        }
    }

    type();
}

module.exports=tw_back;