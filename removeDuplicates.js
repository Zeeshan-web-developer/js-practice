
const arr=[1,2,3,1,3,5,6,7];
let newArr=[];

console.log(arr.indexOf(2))
function removeDuplicates(){
  
  for(let i=0;i<arr.length;i++){
    if(newArr.indexOf(arr[i])==-1){
      newArr.push(arr[i])
    }
  }
  return newArr
  
}


console.log(removeDuplicates())
