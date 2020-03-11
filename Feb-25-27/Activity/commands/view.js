var fs = require("fs")
var path = require("path");

module.exports.view = function(){
    let src = arguments[0];
    let mode = arguments[1];
    
    if(mode == '-t'){
        viewAsTree(src);
    }
    else if(mode == '-f'){
        viewAsFlatFiles(src);
    }
    else{
        console.log("Wrong Parameter!");
    }
};

function viewAsTree(){
    function Alldir(path, indent){
        var Dir = (fs.readdirSync(path));
        Dir.forEach(dir=> {
            console.log(indent+dir); 
            //check for not a directory
            var stat = fs.lstatSync(path+ '/' +dir);
            if(stat.isDirectory()){
                Alldir(path + '/' + dir, indent + "-");
            }
        });
    }
    var path = arguments[0];
    Alldir(path, "")
};

function viewAsFlatFiles(){
    function Alldir(paths){
        var stat = fs.lstatSync(paths).isDirectory();
        if(!stat){
            console.log(paths + "*");
        }
        else{
            console.log(paths);
            var Dir = (fs.readdirSync(paths));
            for(let i = 0; i < Dir.length; i++){
                let cc = path.join(paths, Dir[i]);
                Alldir(cc);
            }

        }
    }
    var paths = arguments[0];
    Alldir(paths)
};