// myMap(arr, cb)
let a = [2,6,17,28,46,68];
let compute = [];

function cb(num){
    if(num % 2 == 0)
        return num + 1;
    else
        return num - 1; 
}

function myMap(a, cb){
    for(var i = 0; i < a.length; i++){
        compute.push(cb(a[i]));
    }
}

myMap(a, cb);

console.log(compute);

//myFilter


function cb2(num){
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

Array.prototype.myfilter = function (cb2){
    let filtered = [];
    for(var i = 0; i < this.length; i++){
        filtered.push(cb2(this[i]));
    }    
    return filtered;
}

console.log(compute.myfilter( cb2));
// console.log(filtered);
