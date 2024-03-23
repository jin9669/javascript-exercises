const reverseString = function(word) {
    newArray = word.split("");
    reverseArray = newArray.reverse();
    newText = reverseArray.join("");
    return newText;
};


// 1) let variable = "" 
// 2) string.split("") -> convert to array 
// 3) .reverse() -> reverse the array 
// 4) .join("") -> convert back to string



// Do not edit below this line
module.exports = reverseString;
