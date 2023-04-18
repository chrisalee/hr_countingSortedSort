/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    let frequencyArray = new Array(100).fill(0);
    for(let num of arr) {
        frequencyArray[num]++
    }
    
    let sortedResults = [];
    for(let i = 0; i < frequencyArray.length; i++) {
        if(frequencyArray[i] === 0) continue;
        else {
            for(let j = 0; j < frequencyArray[i]; j++) {
                sortedResults.push(i)
            }
        }
    }
    console.log(sortedResults);
    return sortedResults;
}
