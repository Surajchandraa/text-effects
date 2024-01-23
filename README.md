# text-animate
`text-animate` is a simple Node.js library for animating text output in the console with customizable styling and speed.



## installation 
- `npm install text-animate`
or
- clone this repository.


## Available Functions:

>>>
**1. tw_forward("text to be animated",100,objectparams)**
- 100 is delay between each latter is printing on screen in milisecond.
- objectparams is an object containing the properties.

```js
    const animate = require('text-animate');
    



    let obj={
    bg: animate.ansi.bgBlue,
    fg: animate.ansi.fgYellow,
    style: animate.ansi.bold
    };


    animate.tw_forward('Karaoke Text Animation!', 200,obj);

```
- Output:
![Text Animation GIF](out/output.gif "Text Animation Demo")

