const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/19322/commentary/1187679"
request(url, function(err, res, html){
    if(err == null && res.statusCode == 200){
        fs.writeFileSync("file2.html", html)
        parseHtml(html);
    }
    else if(res.statusCode == 404){
        console.log("Page not found");
    }
    else{
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtml(html){
    console.log("Parsing HTML2");
    let co = cheerio.load(html);
    let commentEnd = co(".commentary-item .description").html();
    console.log(commentEnd);
    fs.writeFileSync("winBallCom.html", commentEnd);
    console.log("File written to disk"); 
}