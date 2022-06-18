const fs = require('fs');
const del = require('/src/Access-data/delRequest');
fs.unlink(del, () => console.log("file deleted sucessfully"));