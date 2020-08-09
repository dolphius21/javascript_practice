let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /^Hello$/i; // Must begin and end with
re = /H.llo/i; // Matches any one character
re = /H*llo/i; // Matches any character 0 or more times
re = /gra?e?y/i; // Optional character
re = /gray\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be an G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parenthesis () - Grouping
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\W/; // None alphanumeric character
re = /\d/; // Matches digit characters
re = /\D/; // Matches Non-digit character
re = /\s/; // Matches whitespace characters
re = /\S/; // Matches Non-whitespace character
re = /\w+/; // + = One or more characters
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if not followed by y

// String to match
const str = 'x';

// Log Results
const result = re.exec(str);
console.log(result);

const reTest = (re, str) => {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);