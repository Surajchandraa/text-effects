const ansi = require("./ansi");

let defaultconfig={
    bg:ansi.fgWhite,
    fg:ansi.fgWhite,
    style:ansi.fgWhite
  }


function scroll(text, speed=1000,obj) {
    let i = 0;
    let animationParams={...defaultconfig,...obj}
    const intervalId = setInterval(() => {
        const scrolledText = text.slice(i) + text.slice(0, i);
        process.stdout.write(animationParams.style+animationParams.bg+animationParams.fg+'\r' + scrolledText);
        i = (i + 1) % text.length;
    }, speed);

    
    return function stopScrolling() {
        clearInterval(intervalId);
        process.stdout.write('\n'); 
    };
}



module.exports=scroll;