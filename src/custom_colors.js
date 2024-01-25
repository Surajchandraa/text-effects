function customFg(red,green,blue){
    return `\x1b[38;2;${red};${green};${blue}m`;
    
}

function customBg(red,green,blue){
    return `\x1b[48;2;${red};${green};${blue}m`;
}

module.exports={customBg,customFg}