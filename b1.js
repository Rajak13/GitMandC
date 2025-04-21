const fs = require('fs');

fs.writeFile('hello.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    }
});