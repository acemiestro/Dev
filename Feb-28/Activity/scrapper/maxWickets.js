const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/19322/scorecard/1187679/";

request(url, function(err, res, html){
if(err == null && res.statusCode == 200){
        fs.writeFileSync("file.html", html)
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
    console.log("Parsing HTML");
    let co = cheerio.load(html);
    let tableArr = co(".scorecard-section.bowling table tbody tr");
    // console.log(tableArr);
    let maxWicketTaker = "";
    let maxWickets = 0;
    for(let i = 0; i < tableArr.length; i++){
        // convert to cheerio to use index and find
        let wickets = co(co(tableArr[i]).find("td")[5]).html();
        let bowlerName = co(tableArr[i]).find("td a").html();
        if(wickets > maxWickets){
            maxWickets = wickets;
            maxWicketTaker = bowlerName;
        }
    }
    fs.writeFileSync("maxWickets.html", (maxWicketTaker + " " + maxWickets));
    // console.log(maxWicketTaker + " " + maxWickets);
    console.log("File written to disk");
}