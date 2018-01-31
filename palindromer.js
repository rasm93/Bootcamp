// Palindromer

function palindrome(str){
    var re = /[\W_]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');

    var reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
}

// true
console.log(palindrome("A man, a plan, a canal. Panama"));

// false
console.log(palindrome("A woman, a plant, a canal. Panama"));