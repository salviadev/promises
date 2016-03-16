var fs = require('fs');
var path = require('path');



function checkError(err) {
    if (err) {
        console.log(err);
        return false;
    }
    return true;
}

function main() {
    var file1 = path.join(__dirname, 'data', 'file1.json');
    var file2 = path.join(__dirname, 'data', 'file2.json');
    var file3 = path.join(__dirname, 'data', 'file3.json');

    fs.readFile(file1, function (err, data) {
        var d2;
        if (data === 'memory') {
            d2 = "From memory";
            fs.readFile(file3, function (err, data) {
                console.log(data + ' -- ' + d2);
            });
        } else {
            fs.readFile(file2, function (err, data) {
                d2 = data;
                fs.readFile(file3, function (err, data) {
                    console.log(data + ' -- ' + d2);
                });
            });

        }
    });

}




main();

