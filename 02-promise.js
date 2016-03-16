var fs = require('fs');
var path = require('path');

function readFileAsPromise(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}


function main() {
    var file1 = path.join(__dirname, 'data', 'file1.json');
    var file2 = path.join(__dirname, 'data', 'file2.json');
    var file3 = path.join(__dirname, 'data', 'file7.json');
    var file4 = path.join(__dirname, 'data', 'file4.json');


    var d1, d2, d3, d4;
    readFileAsPromise(file1).then(function (data) {
        d1 = data;
        return readFileAsPromise(file2);
    }).then(function (data) {
        d2 = data;
        return readFileAsPromise(file3);
    }).then(function (data) {
        d3 = data;
        return readFileAsPromise(file4);
    }).then(function (data) {
        d4 = data;
        console.log(d1 + "--" + d2 + "--" + d3 + "--" + d4);
        console.log("Done..");
    }).catch(function(ex) {
        console.log(ex);
    });


}

main();

