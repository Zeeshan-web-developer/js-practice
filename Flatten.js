
const arr=[12,[4,[[3]]],[6],[0],[[9],11]];

let result=[];
function flatten(myarr,depth){
  
  for(let i=0;i<myarr.length;i++){
   
    if(Array.isArray(myarr[i])&&depth>1){
      flatten(myarr[i],depth-1)
    }
    else{
      result.push(myarr[i]);
    }
  }
  
 return result;
}


console.log(flatten(arr,Infinity))
