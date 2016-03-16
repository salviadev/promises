//constructor 
new Promise(function (resolve, reject) { });
Promise.reject(raison)
Promise.resolve(valeur)
Promise.all(iterable)


// "promisefly"
function readFileAsPromise(fileName) {
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

