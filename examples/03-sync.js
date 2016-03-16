var fs = require('fs');
var path = require('path');



function main() {
    var file1 = path.join(__dirname, 'data', 'file1.json');
    var file2 = path.join(__dirname, 'data', 'file2.json');
    var file3 = path.join(__dirname, 'data', 'file3.json');

    var d1 = fs.readFileSync(file1);
    var d2;
    if (d1 === "memory")
        d2 = "From memory";
    else
        d2 = fs.readFileSync(file2);
    var d3 = fs.readFileSync(file3);
    console.log(d3 + ' -- ' + d2);

}

main();



