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

function glitch2(text,speed){
    let index=text.length-1

    function type(){
    let originalString=" ";
    let repeatedString=originalString.repeat(index);
    process.stdout.write(repeatedString);
    process.stdout.write(ascii(gen_random(126,32)));
   
    if(index>=0){
        sleepSync(speed);
        process.stdout.write(text[index]);
        readline.cursorTo(process.stdout,0);
        index--;

        if (index >= 0) {
            // sleepSync(speed)
            type()
        } else {
            process.stdout.write('\n');
            
        }

    }



    }

    type();

}

module.exports=glitch2;