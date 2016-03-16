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
    var files = [];
    files.push(path.join(__dirname, 'data', 'file1.json'));
    files.push(path.join(__dirname, 'data', 'file2.json'));
    files.push(path.join(__dirname, 'data', 'file3.json'));
    files.push(path.join(__dirname, 'data', 'file4.json'));


    var res = [];
    for (var i = 0, len = files.length; i < len; i++) {
        res.push(readFileAsPromise(files[i]))
    }
    Promise.all(res).then(function(res){
        console.log(res.join( ' -- '));
    })
    
 
}

main();



