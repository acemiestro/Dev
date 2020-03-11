var fs = require("fs");
var path = require("path");
var uniqid = require("uniqid");

module.exports.untreefy = function(){
    let src = arguments[0];
    let dest = arguments[1];
    let root = {};    
    copyFile(src, dest, root);
    // console.log(root.children[0].children[0]);
    writeMetaData(root, src, dest);
}

function copyFile(src, dest, node){
    var stat = fs.lstatSync(src).isDirectory();
    if(!stat){
        let uniqName = uniqid();
        node.isFile = true;
        node.name = path.basename(src);
        node.newName = uniqName;
        fs.copyFileSync(src, path.join(dest, uniqName));
    }
    else{
        node.isFile = false;
        node.name = path.basename(src);
        node.children = [];
        var Dir = (fs.readdirSync(src));
        for(let i = 0; i < Dir.length; i++){
            let cc = path.join(src, Dir[i]);
            let childObj = {};
            copyFile(cc, dest, childObj);
            node.children.push(childObj);
        }
    }
}

function writeMetaData(node, src, dest){
    let data = JSON.stringify(node); 
    fs.writeFileSync(path.join(dest, "metadata.json"), data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}