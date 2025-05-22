//in Throttling we are bascially controlling how the function gets called

//In throttle the function gets called initially when user starts typing and after X milliseconds?```````
// in debouncing, the idea is:

// ✅ in throttling, the function is guaranteed to run at most once every X milliseconds, no matter how often the user triggers it.
function fetchResults(query) {
  console.log(`Searching for: "${query}"`);
  document.getElementById(
    "results"
  ).innerHTML = `<p>Showing results for: <strong>${query}</strong></p>`;
}



function throttleing(func,limit){
    let  throttleIn;

    return function inner(...args){
        if(!throttleIn){
            func.apply(this,args);
            throttleIn=true
            setTimeout(()=>{
             throttleIn=false
            },limit)
        }

    }

}

// Apply debouncing to search input
const searchInput = document.getElementById("searchInput");
const throttlingSearch = throttle(fetchResults, 5000); // 500ms delay

searchInput.addEventListener("input", (e) => {
    throttlingSearch(e.target.value);
});
