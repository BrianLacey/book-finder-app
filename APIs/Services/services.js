const fs = require("fs");
const csvParser = require("csv-parser");

module.exports = readAllService;

function readAllService() {
  return new Promise(function (resolve, reject) {
    const results = [];
    fs.createReadStream("books.csv")
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log(results);
        resolve(results);
      })
      .on("error", reject);
  });
}
