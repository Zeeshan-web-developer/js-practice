function isPalindrone(str){
  let sp=str.split("").reverse().join("");
if(sp==str) return true
else return false
}


console.log(isPalindrone("madawm"))
