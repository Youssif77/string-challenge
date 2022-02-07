console.log("Hallo");

function stringChallenge(str) {
  let isPalindrome = true;
  const arr = str.split("");
  const removedChars = [];
  let remainingCharacters = 2;
  let lastMatchingCharIndex;

  // 1) Palindrome case
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length - i - 1]) isPalindrome = false;
  }

  if (isPalindrome) return "palindrome";

  // 2) Can be palindrome case
  for (let i = 0; i < arr.length; i++) {
    if (lastMatchingCharIndex === undefined) removedChars.push(arr.shift());

    console.log(arr[lastMatchingCharIndex], lastMatchingCharIndex);

    lastMatchingCharIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) lastMatchingCharIndex = j;
    }
  }

  if (removedChars.length < 2) return removedChars.join("");
  return "not possible";
}

// console.log(stringChallenge("kjjjhjjj"));
console.log(stringChallenge("hshk"));
// console.log(stringChallenge("kk"));
