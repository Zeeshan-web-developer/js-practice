function shareDetails(...args) {
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    console.log({ element });
  }
}

const obj1 = {
  name: "zeeshan",
  age: 21,
};

//shareDetails.call(obj1, ["baramulla", "gutyar"]); //
// in this case shareDetails function assumes this as a single argument { element: [ 'baramulla', 'gutyar' ] }
// in this case the args length will be 1

//shareDetails.apply(obj1, ["baramulla", "gutyar"]); //in this case sharedetils function assumes this two arguemnts { element: 'baramulla' }
//{ element: 'gutyar' }
// in this case the args length will be 2

const dinded = shareDetails.bind(obj1, ["baramulla", "gutyar"]); //assumes length 1 { element: [ 'baramulla', 'gutyar' ] }
dinded();

const dinded1 = shareDetails.bind(obj1, "baramulla", "gutyar"); //assumes length 2 { element: 'baramulla' }
//{ element: 'gutyar' }
dinded1();
