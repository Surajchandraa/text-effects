const ansi = require("./ansi");
const readline = require("readline");

let defaultConfig = {
  bg: ansi.fgWhite,
  fg: ansi.fgWhite,
  style: ansi.fgWhite,
};

function blink(text, speed, objectParams) {
  let animationParams = { ...defaultConfig, ...objectParams };
  let isVisible = true;

  let intervalId=setInterval(() => {
    if (isVisible) {
      process.stdout.write(
        animationParams.style +
          animationParams.bg +
          animationParams.fg +
          text +
          ansi.reset
      );
    } else {
      readline.cursorTo(process.stdout, 0);
      readline.clearScreenDown(process.stdout); 
    }

    isVisible = !isVisible; 
  }, speed);

  return function stopScrolling() {
    clearInterval(intervalId);
    process.stdout.write( animationParams.style +
        animationParams.bg +
        animationParams.fg +
        text +
        ansi.reset)
    process.stdout.write('\n'); 
};
}

module.exports=blink;
