function removeDuplicates(array){
    // return new Set(set); // Passing an array in a Set() constructor will create anew set with unique values of an array (OR)
    const uniqueElements = new Set();
    for(let counter in array){
        if(!uniqueElements.has(array[counter])){
            uniqueElements.add(array[counter]);
        }
    }
    return uniqueElements;
}
console.log(removeDuplicates([1, 'two', 'two', 7, '7', 11])); // { 1, 'two', 7, '7', 11 }
console.log(removeDuplicates([1, 'two', 'two', 7, '7', 11, null])); // { 1, 'two', 7, '7', 11, null }
console.log(removeDuplicates(null)); // {} null set
console.log(removeDuplicates([])); // {}
console.log(removeDuplicates([1, 'two', 'two', -0, '', 11])); // { 1, 'two', 0, '', 11 }