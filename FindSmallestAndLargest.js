const arr=[12,4,3,6,0,9,11];
let small=arr[0];
let large=arr[0];

function finSmallAndLrge(){
  let ans={};
  
  if(arr.length<=0) return [];
  
  for(let i=1;i<=arr.length;i++){
    if(arr[i]<small){
      small=arr[i];
    }
    else if(arr[i]>large){
      large=arr[i];
    }
    
  }
  ans={
    "small":small,
    "large":large
  }
  return ans;
}


console.log(finSmallAndLrge())
