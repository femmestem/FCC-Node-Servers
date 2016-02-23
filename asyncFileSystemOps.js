// MY FIRST ASYNC I/O! (Exercise 4 of 13)
/* Write a program that uses a single asynchronous filesystem operation to
 * read a file and print the number of newlines it contains to the console
 * (stdout), similar to running cat file | wc -l.
 * 
 * The full path to the file to read will be provided as the first
 * command-line argument.
 */

var fs = require('fs');
var fileToParse = process.argv[2];

function countNewlines(file) {
    var contents;
    fs.readFile(file, 'utf8', function (err, data) {
        contents = data;
        
        if (err) {
            logErr();
        } else {
            logNewlineCount();
        }
    });
    function logErr() {
        console.log(err);
    }

    function logNewlineCount() {
        console.log(contents.split("\n").length - 1);
    }
}

countNewlines(fileToParse);
