let bool = false;
let text = bool.constructor;
if(text==function Boolean(){}){
console.log(true);
}else{
console.log(false);
}