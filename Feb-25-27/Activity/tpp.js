let help = require("./commands/help");
let view = require("./commands/view");
let treefy = require("./commands/treefy");
let untreefy = require("./commands/untreefy");
let monitor = require("./commands/monitor");

switch(process.argv[2]){
    case "view":
        // console.log("View=>");
        view.view(process.argv[3], process.argv[4]);
        break;

    case "untreefy":
        // console.log("Untreefy=>");
        untreefy.untreefy(process.argv[3], process.argv[4]);
        break;

    case "treefy":
        // console.log("Treefy=>");
        treefy.treefy(process.argv[3], process.argv[4]);
        break;

    case "monitor":
        // console.log("Monitor=>");
        monitor.monitor(process.argv[3], process.argv[4]);
        break;

    case "help":
        // console.log("Help=>");
        help.help();
        break;

    default: 
        console.log("Wrong command!");
}