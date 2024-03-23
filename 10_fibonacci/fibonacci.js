


const fibonacci = function(position){
    let sequence = [1,1]
    let positionNumber = Number(position);
    let sum = 0; 
    for (i=0; i<=positionNumber; i++){
        sum = sequence[sequence.length -1] + sequence[sequence.length -2]
        sequence.push(sum);
    }
    if (positionNumber >= 1){
    return sequence[positionNumber-1];}
    else if (positionNumber === 0) {
    return sum = 0; 
    }
    else {
        return "OOPS";
    }
};





// Do not edit below this line
module.exports = fibonacci;
