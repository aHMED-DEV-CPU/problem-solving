// ========================================================= 5 =========================================================
/*
    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/
function digitize(n) {
    let arr = n.toString().split("").map((n) => Number(n))
    let reversedArr = []
    for (let i = (arr.length - 1); i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr

}


digitize(0)