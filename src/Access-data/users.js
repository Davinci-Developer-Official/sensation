const fs = require('fs');
const data = require('/src/Apis/user');
let infoUpdate = fs.writeFile('./users.txt', data, (err) => {
    if (err) console.log(err);
    else console.log('information at users.txt has been updated');
});