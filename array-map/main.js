const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const multiplied = number => {
  return number * 2;
};

const doubled = numbers.map(multiplied);
console.log('Multiplied by 2', doubled);

const price = number => {
  const formatted = '$' + number.toFixed(2).toString();
  return formatted;
};

const prices = numbers.map(price);
console.log('Number to String', prices);

const capitalized = language => {
  return language.toUpperCase();
};

const upperCased = languages.map(capitalized);
console.log('Convert to Uppercase', upperCased);

const firstLetter = language => {
  return language[0];
};

const firstLetters = languages.map(firstLetter);
console.log('The First Letter', firstLetters);
