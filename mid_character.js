/*
Middle letter
Write a function named mid that takes a string as its parameter.
Your function should extract and return the middle letter.
If there is no middle letter, your function should return the empty string.
For example, mid("abc") should return "b" and mid("aaaa") should return "".
*/

function mid(word){
     let middle = Math.floor(word.length / 2)

     if ((word.length % 2) === 1){
          return word[middle]
     } else {
          return ""
     } 
}

console.log(mid("hello, how are you?"))