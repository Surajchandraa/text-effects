const ansi =require("./ansi")

function sleepSync(ms) {
    const buffer = new SharedArrayBuffer(4);
    const view = new Int32Array(buffer);
    Atomics.wait(view, 0, 0, ms);
  }
  
  function tw_forward(text, speed = 50, color=ansi.white) {
    
    let index = 0;
  
    function typeSync() {
      process.stdout.write(color+text[index]+ansi.reset);
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
  
  module.exports=tw_forward
  