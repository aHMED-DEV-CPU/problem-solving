// ========================================================= 2 =========================================================

// Sum without highest and lowest number
function sumArray(array) {

    if (!array || array.length <= 2) return 0
    let sum = 0
    let highest = array[0]
    let lowest = array[0]

    for (let i = 0; i < array.length; i++) {
        if (highest < array[i]) {
            highest = array[i]
        }
        if (lowest > array[i]) {
            lowest = array[i]
        }
        sum += array[i]
    }



    return sum - highest - lowest

}

// ========= second way =======

function sumArray2(array) {

    if (!array && array.length <= 2) return 0
    let max = Math.max(...array)
    let min = Math.min(...array)
    let sum = 0
    for (const num of array) {
        sum += num
    }
    return sum - max - min
}


console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray2([6, 2, 1, 8, 10]));

