const { exec } = require("child_process") ;
const openurl =  require("openurl").open;
function blah(data, success, failure){
    if(data%2 ==  0){
        success();
    }
    else{
        failure();
    }
}

function success(){
    console.log("Success");
    exec("calc");
}
function failure(){
    console.log("Failed!");
    openurl("https://www.facebook.com");
}


blah(17, success, failure);
blah(18, success, failure);