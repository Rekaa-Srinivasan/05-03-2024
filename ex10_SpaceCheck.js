function checkSpaces(string) {
    if(string == null){
        return "Given string is null. Provide a valid string";
    }
    for(let i = 0; i<string.length; i++){
        if(string.charAt(i)==' '){
            return true;
        }
    }
    return false;
}
console.log(checkSpaces(' string hello')); // true
console.log(checkSpaces('stringhello')); // false
console.log(checkSpaces('     ')); // true
console.log(checkSpaces('')); // false
console.log(checkSpaces(null)); // Given string is null. Provide a valid string
console.log(checkSpaces(0)); // false
console.log(checkSpaces( 0 )); // false
console.log(checkSpaces(' 0 ')); // true