// HTTP CLIENT (Exercise 7 of 13)
// PROGRAM (File 1 of 2)
/* Write a program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Write the String contents of each
 * "data" event from the response to a new line on the console (stdout).
 */

var getUrlData = require('./httpClientModule');
var url = process.argv[2];

getUrlData(url, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
