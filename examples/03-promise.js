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
    var file3 = path.join(__dirname, 'data', 'file3.json');


    var d2, d3;
    readFileAsPromise(file1).then(function (data) {
        if (data === "memory")
            return Promise.resolve("From memory");
        else
            return readFileAsPromise(file2);
    }).then(function (data) {
        d2 = data;
        return readFileAsPromise(file3);
    }).then(function (data) {
        d3 = data;
        console.log(d3 + ' -- ' + d2);
    });


}

main();

