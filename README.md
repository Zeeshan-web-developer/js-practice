# 🧠 JavaScript Interview Prep

A curated list of JavaScript problems covering essential topics — from strings and arrays to closures, prototypes, and asynchronous programming. Practicing these will help strengthen your core JS knowledge and prepare you for real-world coding interviews.

---

## 📘 Basic JavaScript

1. Reverse a string
2. Check if a string is a palindrome
3. Remove duplicates from an array
4. Find the largest and smallest numbers in an unsorted array
5. Flatten a nested array (e.g., `[1, [2, [3]], 4]` → `[1, 2, 3, 4]`)
6. Merge two sorted arrays into one sorted array
7. Count the number of vowels in a string
8. Capitalize the first letter of each word in a sentence
9. Check if two strings are anagrams
10. Find the first non-repeating character in a string

---

## 🌀 Functions & Closures

11. Implement a **debounce** function
12. Write a **throttle** function
13. Create a **memoization** function to cache expensive calls
14. Polyfill `Function.prototype.bind()`
15. Create a **currying** function (e.g., `sum(1)(2)(3)()` → `6`)
16. Fix the issue in this loop with closures:

    ```js
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1000);
    }
    ```
17. Write a function that can only be called once
18. Implement a **pipe** function: `pipe(fn1, fn2, fn3)(x)` → `fn3(fn2(fn1(x)))`
19. Sum all arguments (support multiple calls like `sum(1)(2)(3)()`, `sum(1,2)(3)()`)
20. Write a **generator function** that yields Fibonacci numbers

---

## 🧱 Objects & Prototypes

21. Deep clone an object (`Object.deepCopy()`)
22. Check if an object is empty
23. Implement **inheritance** using `prototype` and `class`
24. Deep merge two objects
25. Polyfill `Object.create()` as `Object.myCreate()`
26. Deep comparison: Check if two objects are equal
27. Create a private variable using closures
28. Implement a **singleton** pattern
29. Trick: `obj.a == 1 && obj.a == 2 && obj.a == 3` should return `true`
30. Deep freeze an object (no nested modifications)

---

## ⏱️ Asynchronous JavaScript

31. Create a `sleep/delay` function using Promises
32. Retry a failed API call **N times** before giving up
33. Implement `Promise.all()` from scratch
34. Implement `Promise.race()` from scratch
35. Fetch data in parallel and process in sequence
36. Cancel a fetch request after a timeout
37. Throttle API calls to avoid rate limiting
38. Chain promises sequentially
39. Handle multiple async operations with error handling
40. Polling: check an API every 5 seconds until success

---

## 🧮 Arrays & Data Structures

41. Find the missing number in an array from 1 to N
42. Find all pairs in an array that sum to a given number
43. Implement `Array.prototype.map()` from scratch
44. Implement `Array.prototype.filter()` from scratch
45. Implement `Array.prototype.reduce()` from scratch
46. Rotate an array to the right by `k` steps
47. Find the longest substring without repeating characters
48. Merge overlapping intervals from an array of intervals
49. Find the maximum subarray sum (Kadane’s Algorithm)
50. Implement **binary search** on a sorted array

---

## 🚀 Ready to Practice?
