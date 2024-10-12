let arr = [1, 2, 3, 4, 5];

function trans(i){
  return i * 2;
}

const newArr = arr.map(trans);
console.log(newArr);

// logic behind map function
function mapp(arr, fn){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

console.log(mapp(arr,trans));

// filter function
const ans = arr.filter((n)=>{
  if(n % 2 == 0){
    return true;
  }else{
    return false;
  }
})

console.log(ans);