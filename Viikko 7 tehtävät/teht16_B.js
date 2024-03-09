const prompt = require('prompt-sync')();

function isPalindrome(word){
    word = word.toLowerCase();

    word = word.replace(/[^a-z]/g,'');

    var reverseWord = word.split('').reverse().join('');

    return word === reverseWord
}

var word = prompt ('Enter a word to see if it is palindrome: ');
if(isPalindrome(word)){
    console.log("'"+word+"' is a palindrome");
}
else{
    console.log("'"+word+"' is not a palindrome");
}