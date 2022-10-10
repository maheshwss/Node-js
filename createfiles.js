const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);

// create multiple files in a folder
// for (i=0; i<5; i++) {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple file");
//     // fs.writeFileSync(`hello${i}.txt`, "a simple file");
// }

// read the files names in that folder
fs.readdir(dirPath, (err, files) => {
    // console.warn(files);
    files.forEach(item => {
        console.log("file name is: "+item);
    })
})