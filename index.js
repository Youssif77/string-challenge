console.log("Hallo");

// function StringChallenge(str) {
//   const arr = str.split("");
//   let remainingCharacters = 2;

//   let isPalindrome = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (remainingCharacters < 0) return "not possible";
//     if (arr[i] != arr[arr.length - i - 1]) isPalindrome = false;

//     console.log(arr[i], arr[arr.length - i - 1]);
//   }

//   if (arr.length < 3) return "not possible";

//   if (isPalindrome) return "palindrome";

//   return isPalindrome ? "k" : "not possible";
// }

function StringChallenge(str) {
  const arr = str.split("");
  let remainingCharacters = 2;

  for (let i = 0; i < arr.length; i++) {
    if (remainingCharacters < 0) return "not possible";

    for (let j = arr.length - 1; j < 0; j--) {
      if (arr[j] != arr[arr.length - j - 1]) {
        isPalindrome = false;
      }
    }

    console.log(arr[i], arr[arr.length - i - 1]);
  }

  if (arr.length == str.length) return "palindrome";
  else return "k";
  // switch (remainingCharacters) {
  //   case 2:
  //     return "palindrome";
  //   case 1:
  //   case 0:
  //     return "k";
  //   default:
  //     return "not possible";
  // }
}

// console.log(StringChallenge("mmop"));
// console.log(StringChallenge("kjjjhjjj"));
console.log(StringChallenge("kk"));
