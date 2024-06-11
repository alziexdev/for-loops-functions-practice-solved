// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const specificClientNames = [];
  for (let i = 0; i < array.length; i++) {
    let accountHolder = array[i].name;
    for (let a of accountHolder) {
      let letterIncluded = false;
      if(a == letter) {
        letterIncluded = true;
      } 
      else if(a == letter.toUpperCase()) {
        letterIncluded = true;
      }
    if(letterIncluded) {
      specificClientNames.push(array[i].name);
    }
  }
}
  return specificClientNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
