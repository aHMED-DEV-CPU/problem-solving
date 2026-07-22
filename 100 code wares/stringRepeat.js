// ========================================================= 4 =========================================================

// String repeat

function repeatStr(n, s) {
    if (n <= 0) return "";
    let repeatedWord = s
    for (let i = 1; i < n; i++) {
        repeatedWord += s

    }
    return repeatedWord;
}

// second way

function repeatStr2(n, s) {

    return s.repeat(n);
}

console.log(repeatStr2(10, "Hello"))