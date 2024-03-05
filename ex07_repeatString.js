function repeatString(string, repeatCount){
    // Using repeat() of String throws an error in case of passing null as a string TypeError: Cannot read properties of null (reading 'repeat')
    // return string.repeat(repeatCount);
    let result = '';
    for(let i=0; i<repeatCount; i++){
        result += string;
    }
    return result;
}
console.log(repeatString('arun', 7)); // arunarunarunarunarunarunarun
console.log(repeatString('arun', 0)); // ''. Empty string as we're printing 0x
console.log(repeatString('', 7)); // ''. Empty as the given string is empty
console.log(repeatString(null, 7)); // nullnullnullnullnullnullnull
console.log(repeatString('arun', null)); // ''. Empty as we're printing 0x