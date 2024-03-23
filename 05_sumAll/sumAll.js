const sumAll = function(start, end) {
    let sum = 0;
    if (typeof start === 'number' && typeof end === 'number'){

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
}
else {
    return "ERROR"
}
};

// Do not edit below this line
module.exports = sumAll;
