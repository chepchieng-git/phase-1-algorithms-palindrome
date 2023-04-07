function isPalindrome(word) {
  // Write your algorithm here
  const lowerCasedString = word.toLowerCase()
  const splitString = lowerCasedString.split("")
  const splitReverseString = splitString.reverse()
  const joinString = splitReverseString.join("");
  if(lowerCasedString !== joinString)
  {
    return false
  }else
    return true
  }


/* 
  Add your pseudocode here
  Write the  string input
  Ensure you convert it to lowerCase
  reverse the string 
  Then compare the string both reversed
  return true when string is equal 
  return false if string is not equal
*/

/*
  Add written explanation of your solution here
  I made Conversion of input to lowercase
I Splitted string to be in an array
Ithen reversed the splitted string
Joined the string and compared the original with the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
