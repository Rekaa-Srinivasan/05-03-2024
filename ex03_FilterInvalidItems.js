function filterOut(array, datatype){
    const result = [];
    for(let element of array){
        if(typeof element!=datatype){
            result.push(element);
        }
    }
    console.log(result);
}
filterOut(['a', 'd', 1, true, 'cd', 33], 'string'); // [ 1, true, 33 ]
filterOut(['a', 'd', 1, true, 'cd', null], 'string'); // [ 1, true, null ]
filterOut(['a', '', 1, true, 'cd', 33], 'string'); // [ 1, true, 33 ]
filterOut(['a', 'd', 1, undefined, 'cd', 0], 'string'); // [ 1, undefined, 0 ]
