//returns the first index the given element can be found in in the array, or -1 if it is not present (mdn)
function indexing(array, element) {
    var ans = -1
    //search through until you get the answer
    for (let i = 0; (i <= array.length) && (ans === -1); i++) {
        if (array[i] === element) {
            ans = i
        }
    }
    return ans
}

//tests to check
var test = [1, 2, 3]
var test1 = [4, 58, 28, 9 , 103, 2]
console.log("check to see if these match!")
console.log(test.indexOf(1), "//", indexing([1, 2, 3], 1)) //0
console.log(test.indexOf(4), "//", indexing([1, 2, 3], 4)) //-1
console.log(test.indexOf(3), "//", indexing([1, 2, 3], 3)) //2
console.log(test.indexOf(5), "//", indexing([1, 2, 3], 5)) //-1
console.log(test1.indexOf(28), "//", indexing([4, 58, 28, 9 , 103, 2], 28)) //-1
console.log(test1.indexOf(2), "//", indexing([4, 58, 28, 9 , 103, 2], 2)) //-1