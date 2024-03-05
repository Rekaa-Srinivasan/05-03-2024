function stringSplit(string, splitLength){
    if(splitLength>0){
        const arr = [];
    for(let i = 0; i<string.length; i+=splitLength){
        arr.push(string.substr(i, splitLength));
    }
    console.log(arr);
    }else{
        console.log(string.split());
    }
}
stringSplit('numenticaui', 3);
stringSplit('numenticaui', 10);
stringSplit('numenticaui', 1100);
stringSplit('numenticaui', 0);
stringSplit('', 10);
stringSplit('numenticaui', null);
stringSplit(null, 10);