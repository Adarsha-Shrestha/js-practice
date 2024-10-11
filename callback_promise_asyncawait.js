// function asyncFunction(callback){
//   callback('hi')
// }

// async function main(){
//   asyncFunction(function(value){
//     console.log(value)
//   }
//   )}

// main();


// function asyncFunction(){
//   p = new Promise((resolve, reject) => {
//     resolve('hi')
//   });
//   return p;
// }

// function main(){
//   asyncFunction().then(function(value){
//     console.log(value);
//   })
// }

// main();

function asyncFunction(){
    p = new Promise((resolve, reject) => {
      resolve('hi')
    });
    return p;
  }
  
  async function main(){
    let value = await asyncFunction();
    console.log(value);
  }
  
  main(); 