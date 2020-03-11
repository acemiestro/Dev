let n = 17;
for(let i = 2; i*i <= n; i++){
    if(n%i == 0){
        console.log("Not Prime");
        return;
    }
}
console.log("Prime");