const str: string="sasanatntuuk";



function firstNonRepeatingCharater(){
  const map:Record<string,number>={}


for(const char of str){
 map[char] = (map[char] || 0) + 1;
}

for(let [key,value] of Object.entries(map)){
  if(value==1){
    return {key:value}
    
  }
}

return null
}
console.log(firstNonRepeatingCharater())
