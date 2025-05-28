const obj1 = {
  name: "Alice",
  details: {
    age: 25,
    // hobbies: ["reading"],
  },
};

const obj2 = {
  details: {
    age: 30,
    hobbies: ["cycling"],
    location: "NYC",
  },
  status: "active",
};

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}


function deepMerge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return false;
  }
  const merged = { ...target };

  for (const key of Object.keys(source)) {
    if (isObject(source[key])) {
      if (!target.hasOwnProperty(key)) {
        merged[key] = source[key];
      } else {
        merged[key] = deepMerge(merged[key], source[key]);
      }
    } else if (Array.isArray(source[key])) {
      merged[key] = Array.isArray(target[key])
        ? [...target[key], ...source[key]]
        : [...source[key]];
    } else {
      merged[key] = source[key];
    }
  }
  return merged;
}

const result = deepMerge(obj1, obj2);
console.log(result);
