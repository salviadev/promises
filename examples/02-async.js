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
    var file3 = path.join(__dirname, 'data', 'file7.json');
    var file4 = path.join(__dirname, 'data', 'file4.json');



    fs.readFile(file1, function (err, data) {
        if (!checkError(err)) return;
        var d1 = data;
        fs.readFile(file2, function (err, data) {
            if (!checkError(err)) return;
            var d2 = data;
            fs.readFile(file3, function (err, data) {
                if (!checkError(err)) return;
                var d3 = data;
                fs.readFile(file4, function (err, data) {
                    if (!checkError(err)) return;
                    var d4 = data;
                    console.log(d1 + "--" + d2 + "--" + d3 + "--" + d4);
                });

            });
        });
    });

}




main();

