function findNumberOfOccurences(sentence, word){
        // console.log((sentence.match(new RegExp(s, "gi"))).length);
        if(sentence == null || word == null){
                return "Given sentence/word is null. Provide proper values";
        }
        let count = 0;
        sentence = sentence.toLowerCase();
        word = word.toLowerCase();
        for(let i=0; i<sentence.length; i++){
                let string = sentence.substr(i, word.length);
                if(string==word){
                        count++;
                }
        }
        return count;;
}
console.log(findNumberOfOccurences('hellohello kyullo hloHelLo jello, mello', 'hello')); // 3
console.log(findNumberOfOccurences('hellohello kyullo hloHelLo jello, mello', ' ')); // 4 as there is 4 whitespaces
console.log(findNumberOfOccurences('hellohello kyullo hloHelLo jello, mello', '')); // 39. Returns length of the sentence
console.log(findNumberOfOccurences('', 'hello')); // 0. Returns 0 as there is no 'hello' in empty string
console.log(findNumberOfOccurences(null, 'hello')); // Given sentence/word is null. Provide proper values
console.log(findNumberOfOccurences('hellohello kyullo hloHelLo jello, mello', null)); // Given sentence/word is null. Provide proper values