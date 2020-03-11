let arr = [2,6,17,28,46,68];

let _map = arr.map(function(n){
    if(n % 2 == 0)
        return n+1;
    else
        return n-1;
})
console.log(_map);

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

console.log(_map.filter(isPrime));