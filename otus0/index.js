'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(n = null) {
    if (typeof sum.counter == 'undefined') {
        sum.counter = 0;
    }
    if (n === null) {
        console.log(sum.counter);
    } else {
        sum.counter += n;
    }
}

var recursiveAsyncReadLine = function() {
    rl.question('Write number or nothing: ', function(answer) {
        if (answer == '') {
            sum();
            return rl.close();
        }
        sum(Number(answer));
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();