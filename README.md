# text-effects
`text-effects` is a simple Node.js library for animating text output in the console with customizable styling and speed.



## installation 
- `npm install text-effects`
or
- clone this repository.


## Available Functions:

>>>
### **1. tw_forward(text,delay,styles)**

- **text**- "text to be animated
- **delay**-  delay between each latter is printing on screen in milisecond. or we can say it is speed of animation.
- **styles**-  An object containing properties for customizing the text style.

```js
    const animate = require('text-effects');
    

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
## **2. tw_back(text,delay,styles)**

- **text**- "text to be animated"
- **delay**-  delay between each latter is printing on screen in milisecond. or we can say it is speed of animation.
- **styles**-  An object containing properties for customizing the text style.


```js
    const animate = require('text-effects');
    

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
## **3. karaoke(text,delay,styles)**

>>>
## **4. scroll(text,speed,styles)**
```js
    const animate = require('text-effects');

    let obj={
    style:animate.ansi.bright,
    bg:animate.ansi.bgBlack,
    fg:animate.ansi.fgGreen
}
    const stopAnimation = animate.scroll('hello world!', 100, obj);

    //stopAnimation is an function returned by scroll function and can be used to stop the animation. If you call stopAnimation inside a settimeout function than you can stop animation after some time otherwise this animation will animate untill you stop it.

    


```

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


