# text-animate
`text-animate` is a simple Node.js library for animating text output in the console with customizable styling and speed.



## installation 
- `npm install text-animate`
or
- clone this repository.


## Available Functions:

>>>
### **1. tw_forward(text,delay,styles)**

- **text**- "text to be animated
- **delay**-  delay between each latter is printing on screen in milisecond. or we can say it is speed of animation.
- **styles**-  An object containing properties for customizing the text style.

```js
    const animate = require('text-animate');
    

    let obj={
    bg: animate.ansi.bgWhite,
    fg: animate.ansi.fgRed,
    style: animate.ansi.bright
    };


    animate.tw_forward('hi this is a text animation library.', 100,obj);

```
- Output:

- ![Text Animation GIF](out/output_f.gif "Text Animation Demo")

>>>
**2. tw_back(text,delay,styles)**

- **text**- "text to be animated"
- **delay**-  delay between each latter is printing on screen in milisecond. or we can say it is speed of animation.
- **styles**-  An object containing properties for customizing the text style.


```js
    const animate = require('text-animate');
    

    let obj={
    bg: animate.ansi.bgBlack,
    fg: animate.ansi.fgRed,
    style: animate.ansi.bright
    };


    animate.tw_back('hi this is a text animation library.', 100,obj);


```
- Output:

- ![Text Animation GIF](out/output_b.gif "Text Animation Demo")

>>>
**3. karaoke(text,delay,styles)**

## Styling with ansi Module
- The ansi module provides convenient styling options that you can use with the text-animate functions. Here are the available styles:
- Reset: `ansi.reset`
- Bright: `ansi.bright`
- Dim: `ansi.dim`
- Underscore: `ansi.underscore`
- Blink: `ansi.blink`
- Reverse: `ansi.reverse`
- Hidden: `ansi.hidden`

Foreground (Text) Colors:

- Black: `ansi.fgBlack`
- Red: `ansi.fgRed`
- Green: `ansi.fgGreen`
- Yellow: `ansi.fgYellow`
- Blue: `ansi.fgBlue`
- Magenta: `ansi.fgMagenta`
- Cyan: `ansi.fgCyan`
- White: `ansi.fgWhite`

Background Colors:

- Black: `ansi.bgBlack`
- Red: `ansi.bgRed`
- Green: `ansi.bgGreen`
- Yellow: `ansi.bgYellow`
- Blue: `ansi.bgBlue`
- Magenta: `ansi.bgMagenta`
- Cyan:`ansi.bgCyan`
- White: `ansi.bgWhite`

- ***Note: you can use your own ansi colors for styling***