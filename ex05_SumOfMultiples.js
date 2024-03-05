function findSum(number, multiple){
    let sum = 0;
    for(let i=1; i<=multiple;i++){
        sum+=number*i;
    }
    return sum;
}
console.log(findSum(8, 3)); // 48
console.log(findSum(9, 0)); // 0
console.log(findSum(0, 0)); // 0
console.log(findSum(null, 0)); // 0
console.log(findSum(8, null)); // 0
