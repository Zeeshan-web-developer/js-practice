function f1(a) {
  return function f2(b) {
    return function f3(c) {
      return a + b + c;
    };
  };
}

function s1(a) {               //1 3 7
  return function s2(b) {
    if (b) {
      return s1(a + b);     //1 3  4
    }
    return a;               //1  3
  };
}

console.log(s1(1)(2)(4)());
