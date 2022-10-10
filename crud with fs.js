const fs =require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud with fs');
const filePath = `${dirPath}/apple.txt`;

// create a file in a folder
// fs.writeFileSync(filePath, "This is a simple text file");

// read the content in that file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     console.log(data);
// });

// add some text to the file
// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if (!err) console.log("file is updated");
// });

// rename the file 
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if (!err) console.log("file name is updated");
// })

// delete the file
fs.unlinkSync(`${dirPath}/fruit.txt`);