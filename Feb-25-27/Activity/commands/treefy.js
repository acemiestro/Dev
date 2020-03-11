var fs = require("fs");
var path = require("path");

module.exports.treefy = function(){ 
    let src = arguments[0];
    let dest = arguments[1];
    var root = require(path.join(src, "metadata.json"))
    treeFile(src, dest, root);
}

function treeFile(src, dest, node){
    if(node.isFile == true){
        let oldName = path.join(src, node.newName);
        let newName = path.join(dest, node.name);
        fs.copyFileSync(oldName, newName);
    }
    else{
        let dirName = path.join(dest, node.name);
        fs.mkdirSync(dirName);
        for(let i = 0; i < node.children.length; i++){
            // let cc = path.join(dest, node.children[i]);
            treeFile(src, dirName, node.children[i]);
        }
    }
}