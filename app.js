
function solution(s){
    let sAux = s; //Get a copy of the string
    const arr = []; //this array contains all possibilities for removing a letter from "s"

    for(let i = 0; i < sAux.length; i++){
        //this for loops through s
        s = s.replace(s[i], ""); //replace the current character by white space
        arr.push(s); //save the string without a letter in "arr"
        s = sAux; //recover the original string
    }
    arr.sort(); //sort the array alphabetically
    return arr[0]; //return the first element
}

console.log(solution("codelity"));
console.log(solution("hot"));
console.log(solution("aaaa"));
console.log(solution("test"));
