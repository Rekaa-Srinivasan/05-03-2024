function findSum(n, a){
    let sum = 0;
    for(let i=1; i<=a;i++){
        sum+=n*i;
    }
    console.log(sum);
}
findSum(9, 0);