function findEvenSum(array){
    let sum = 0;
    for(let number in array){
        if(array[number]%2 == 0){
            sum+=array[number];
        }
    }
    return sum;
}
// console.log(findEvenSum([38, 3, 2, 8, 31]));
// console.log(findEvenSum([-38, 3, 2, 8, 31]));
// console.log(findEvenSum(['-38', 3, 2, 8, '31']));
console.log(findEvenSum([-38, null, 2, 8, 31]));
console.log(findEvenSum([null, null, null]));
console.log(findEvenSum([, , , , ,]));