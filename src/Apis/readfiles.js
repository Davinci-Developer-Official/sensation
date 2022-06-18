const fs = require('fs');

fs.readFile('./index.html', (err, data) => {
    if (err) console.log('error occurred');

    console.log(data.toString());

});