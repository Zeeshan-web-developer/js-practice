//memoizing value using js //

function memoizeAddition(){
  const map=new Map();
  return function innerfunction(input){
      if(map.has(input)){
    console.log("cahce hit")
    return map.get(input);
  }
  else{
     console.log("cahce miss")
    const newval=input+20
    map.set(input,newval)
   
    return newval;
  }
    }
  
}



const inner=memoizeAddition()
console.log(inner(20)); //output: 40 calculated

console.log(inner(20)); //output: 40 calculated
