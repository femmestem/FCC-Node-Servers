// JUGGLING ASYNC (Exercise 9 of 13)  
// MODULE (File 2 of 2)
/*
 * This problem is the same as the previous problem (HTTP COLLECT) in that  
 * you need to use http.get(). However, this time you will be provided with  
 * three URLs as the first three command-line arguments.  
 *  
 * You must collect the complete content provided to you by each of the URLs  
 * and print it to the console (stdout). You don't need to print out the  
 * length, just the data as a String; one line per URL. The catch is that you  
 * must print them out in the same order as the URLs are provided to you as  
 * command-line arguments. 
 */

var http = require('http'),
    bl = require('bl');

module.exports = function (urlArr, callback) {
    var dataQueue = [];
    var count = 0;

    for (var i=0, l=urlArr.length; i<l; i++) {
        getDataStream(urlArr[i], i);
    }


    function getDataStream(url, index) {
        http.get(url, function (response) {
            response.pipe(bl(function (err, data) {
                if (err) {
                    return err;
                } else {
                    dataQueue[index] = data.toString(); 
                    count++;  
                }
                
                if (count === urlArr.length) {
                    callback(null, dataQueue);
                }
            }));
        });
    }
}
