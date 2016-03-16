var fs = require('fs');
var path = require('path');



function main() {
    var file1 = path.join(__dirname, 'data', 'file1.json');
    var file2 = path.join(__dirname, 'data', 'file2.json');
    var file3 = path.join(__dirname, 'data', 'file7.json');
    var file4 = path.join(__dirname, 'data', 'file4.json');
    //console.log(f1);
    try {
        var d1 = fs.readFileSync(file1);
        var d2 = fs.readFileSync(file2);
        var d3 = fs.readFileSync(file3);
        var d4 = fs.readFileSync(file4);
        console.log(d1 + '--' + d2 + '--' + d3 + '--' + d4);
    } catch (ex) {
        console.log(ex);
    }
}

main();
