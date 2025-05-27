
const deepCloneObject=(obj)=>{
 //const cloneCopy={...obj} --shallow clone
// 
/*
Loses functions: Methods/functions are removed.

Loses special object types: Dates, undefined, Maps, Sets, RegExps, etc. don’t survive properly.

Circular references: It will throw an error if the object has circular references.
*/
// const deepclone=JSON.parse(JSON.stringify(obj)) //deep clone--
// deepclone.address.fulladdress.innerColony.city="ahmad"
 
//   console.log(deepclone,obj)


const deepclone=structuredClone(obj)
deepclone.address.fulladdress.city = "gujrat";
  console.log("Cloned object:", deepclone);
  console.log("Original object:", obj);

return null
}

const obj={
  name:"zeeshan",
  age:26,
  address:{
    street:"madhapur",
    fulladdress:{
      city:"hyd",
      roadNo:21,
      innerColony:{
        city:"hyderabd 24",
        colony:"sheikh"
      }
    }
  }
}
console.log(deepCloneObject(obj))



