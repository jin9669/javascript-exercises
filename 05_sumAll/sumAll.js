const sumAll = function(start, end) {
    let sum = 0;
    if (start < end && start >= 0){
for (let i = start; i<=end; i++){
sum+=i;}}
    else if (start > end){
for (let i = start; i>=end; i--){
sum+=i;
}
    }
    else {
    return "ERROR";
    }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
