const ansi =require("./ansi")

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
  
  function tw_forward(text, speed = 50, objectparams) {
    
    let index = 0;
    let animationParams = { ...defaultconfig, ...objectparams };
    function typeSync() {
      process.stdout.write(animationParams.style+animationParams.bg+animationParams.fg+text[index]+ansi.reset);
      index++;
  
      if (index < text.length) {
        sleepSync(speed);
        typeSync();
      } else {
        process.stdout.write('\n');
      }
    }
  
    typeSync();
  }
  
let obj={
  style:ansi.bright,
  bg:ansi.bgBlue,
  fg:ansi.fgRed,
  
}

for(let i=0;i<20;i++){
tw_forward("hi this is a text animation library.",100,obj)
}
  module.exports=tw_forward;
  