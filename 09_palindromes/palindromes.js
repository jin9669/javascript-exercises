


const palindromes = function (string) {
    let alphanumeric = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let array = Array.from(string.toLowerCase());
    let filteredArray = array.filter((char) => alphanumeric.includes(char));
    let filteredString = filteredArray.join('');
    console.log(filteredString);

    let reversedFilteredArray = filteredArray.reverse();
    let reversedFilteredString = reversedFilteredArray.join('');
    console.log(reversedFilteredString)

    return filteredString === reversedFilteredString
};

// Do not edit below this line
module.exports = palindromes;
