// HTTP COLLECT (Exercise 8 of 13)
// MODULE (File 2 of 2)
/* Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/

var http = require('http'),
    bl = require('bl');

module.exports = function (url, callback) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return err;
            } else {
                return callback(null, data.toString().length + "\n" + data.toString());   
            }
        }));
    });
}
