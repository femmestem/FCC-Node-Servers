// HTTP CLIENT (Exercise 7 of 13)
// MODULE (File 2 of 2)
/* Write a program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Write the String contents of each
 * "data" event from the response to a new line on the console (stdout).
 */

var http = require('http');

module.exports = function (url, callback) {
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            return callback(null, data);
        });
        response.on('error', function (e) {
            return callback(e);
        });
    });
}
