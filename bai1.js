const name = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];

function allLongestString(wordList) {
    if(!Array.isArray(wordList) || wordList.length === 0) return undefined;
    let longestWord = wordList[0];
    for (let i = 0; i < wordList.length; i++) {
        const currentWorld = wordList[i];
        
        if(currentWorld.length > longestWord.length) {
            longestWord = currentWorld;
        }
    } return longestWord;
}

function allLongestStringForeach(wordList) {

    let longestWord = wordList[0];
    wordList.forEach(currentWorld => {
        longestWord = currentWorld;
    })

    return longestWord;
} 

function allLongestStringReduce(wordList) {

    return wordList.reduce((longestWord, currentWorld) => currentWorld.length > longestWord.length ? currentWorld : longestWord);
} 

console.log(allLongestString(name));
console.log(allLongestStringReduce(name));
console.log(allLongestStringForeach(name));