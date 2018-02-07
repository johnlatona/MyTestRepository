var cheerio = require("cheerio");
var request = require("request");

console.log("\nlogging each headline and article link on CNBC's Donald Trump Page\n");

request("https://www.cnbc.com/donald-trump/", function(error, response, html) {
  var $ = cheerio.load(html);
  var results = [];
  $("div.wirestory").each(function(i, element) {
    var link = $(element).find("div.headline").find("href");
    var para = $(element).find("p").text();
    results.push({
      link: link,
      para: para
    });
    console.log(results);
  });
});
