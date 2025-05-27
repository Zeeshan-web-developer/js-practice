const isEmptyObject=(obj)=>{
  if(Object.keys(obj).length>0) return false
  return true

}

console.log(isEmptyObject({name:"zeeshan"}))
