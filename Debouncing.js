//in Debounce we are bascially controlling how the function gets called

//here we are calling the function once user stops after 500ms`````````````````
// in debouncing, the idea is:

// ✅ Only call the function once the user has stopped triggering it for X milliseconds.
function fetchResults(query) {
  console.log(`Searching for: "${query}"`);
  document.getElementById(
    "results"
  ).innerHTML = `<p>Showing results for: <strong>${query}</strong></p>`;
}

// Debounce function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    console.log({ debounce: timeoutId });
    clearTimeout(timeoutId); // Clear previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Call the function after delay
    }, delay);
  };
}

// Apply debouncing to search input
const searchInput = document.getElementById("searchInput");
const debouncedSearch = debounce(fetchResults, 500); // 500ms delay

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
