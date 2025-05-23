/**
 * var index is hoisted to the function level, so all setTimeout callbacks share the same index variable.

By the time the callbacks execute, the loop has already finished, and index is 5 (since index < 5 fails).
 */
(function interting() {
  for (var index = 0; index < 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 100);
  }
})();

/**
 * let creates a new index for each loop iteration, so each setTimeout captures the correct value.
 */
(function interting1() {
  for (let index = 0; index < 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 100);
  }
})();

/**
 * The Immediately Invoked Function Expression (IIFE) creates a new scope for each iteration, preserving i.
 */
(function interting1() {
  for (var index = 0; index < 5; index++) {
    function f(j) {
      setTimeout(() => {
        console.log(j);
      }, index * 100);
    }
    f(index);
  }
})();
