
function positiveSum(arr) {
    let sum = 0;
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] > 0 && (sum += arr[i])
        }
    }
    return sum
}

// ========= second way =======

function positiveSum2(arr) {
    return arr.filter((num) => num > 0).reduce((acc, current) => acc + current, 0)
}
console.log(positiveSum([5, -1, 3, -6]));
console.log(positiveSum2([5, -1, 3, -6]));
