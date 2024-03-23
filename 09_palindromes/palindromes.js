// step 1: convert to array 
// step 2: reverse array
// step 3: convert reversed array back to string
// step 4: if string = reversed string, return true otherwise return false



const palindromes = function (string) {
    let array = Array.from(string);
    let reverseArray = array.reverse();
    let reverseString = reverseArray.join('');
    if (reverseString === string){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
