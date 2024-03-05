function filterOut(arr, s){
    const a = [];
    for(let i of arr){
        if(typeof i!=s){
            a.push(i);
        }
    }
    console.log(a);
}
filterOut(['a', 'd', 1, true, 'cd', 33], 'string');