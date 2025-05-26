//Function that can be called Only once 

function calledOne(fnc){
  let isCalled=false;
  
  return function callme(...args){
    if(!isCalled){
      fnc.apply(this,args)
      isCalled=true
    }
  }
}


const fetchData=()=>{
  console.log("Fetching data from databse ------Loading ....")
}
const callme=calledOne(fetchData)

callme()
callme()
callme()
