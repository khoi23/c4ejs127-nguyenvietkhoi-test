let number = [60, 40, 55, 75, 64];
// c2
function newNumber(e) {
    let newNumber = [];
    for (let i = 0; i < e.length; i+=2){
        newNumber.push(e[i]);
    } return newNumber;
}
function newNumber2(e) {
    let newNumber2 = [];
    for (let i = 1; i < e.length; i+=2){
        newNumber2.push(e[i]);
    } return newNumber2;
}
console.log(newNumber2(number));
console.log(newNumber(number));

function name(params) {
    
}

// c1
function alternatingSums(array) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i+=2){
        sum += array[i];
    }

    for (let i = 1; i < array.length; i+=2) {
        sum2 += array[i];
    }
    return `${sum}, ${sum2}`;
}

console.log(alternatingSums(number));