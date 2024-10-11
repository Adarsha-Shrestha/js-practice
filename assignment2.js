// Increase the value of count by 1 every second

// let counter = 0;

// function count(){
//     console.log(counter);
//     counter++;
// }

// setInterval(count, 1000);


// same thing using setTimeout

// let counter = 0;

// function count(){
//     console.log(counter);
//     counter++;
//     setTimeout(count, 1000);  
// }

// count();

// reading form file and printing on console

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// writing to a file

// const fs = require('fs');

// fs.writeFile('file.txt', 'Hello World!', (err) => {
//     if(err) throw err;
//     console.log('The file has been saved!');
// });

// reading from a file and clearing the white space and writing to the file

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     const newData = data.replace(/\s+/g, ' ');
//     fs.writeFile('file.txt', newData, (err) => {
//         if(err) throw err;
//         console.log('The file has been saved!');
//     });
// });

// make a clock using setInterval and setTimeout

// function clock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// setInterval(clock, 1000);

// // same thing using setTimeout

// function clock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
//     setTimeout(clock, 1000);
// }
// clock();

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function delay(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, n * 1000);
//     });
// }

// delay(3).then(() => {
//     console.log('3 seconds have passed');
// });

