function numberToString(num){
    let result = '';
    let number;
    if(num!=null){
        number = num.toString();
    }else{
        return "Provide a valid number";
    }
    for(let i = 0; i<number.length; i++){
        switch(number.charAt(i)){
            case '0':
                result+='zero';
                break;
            case '1':
                result+='one';
                break;
            case '2':
                result+='two';
                break;
            case '3':
                result+='three';
                break;
            case '4':
                result+='four';
                break;
            case '5':
                result+='five';
                break;
            case '6':
                result+='six';
                break;
            case '7':
                result+='seven';
                break;
            case '8':
                result+='eight';
                break;
            case '9':
                result+='nine';
                break;
            default:
                return "Provide a valid number";
        }
    }
    return result;
}
console.log(numberToString(12345)); // onetwothreefourfive
// console.log(numberToString('12345')); // onetwothreefourfive
// console.log(numberToString('123f45')); // Provide a valid number
// console.log(numberToString('')); // '' Returns an empty string
// console.log(numberToString(0)); // zero
// console.log(numberToString(null)); // Provide a valid number