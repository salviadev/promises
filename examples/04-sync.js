var fs = require('fs');
var path = require('path');



function main() {
    var files = [];
    files.push(path.join(__dirname, 'data', 'file1.json'));
    files.push(path.join(__dirname, 'data', 'file2.json'));
    files.push(path.join(__dirname, 'data', 'file3.json'));
    files.push(path.join(__dirname, 'data', 'file4.json'));


    var res = [];
    for (var i = 0, len = files.length; i < len; i++) {
        res.push(fs.readFileSync(files[i]))
    }
    console.log(res.join( ' -- '));
    

}

main();



