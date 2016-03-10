// HTTP COLLECT (Exercise 8 of 13)
// PROGRAM (File 1 of 2)
/* Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/

var getDataStream = require('./httpCollectModule'),
    url = process.argv[2];

getDataStream(url, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
