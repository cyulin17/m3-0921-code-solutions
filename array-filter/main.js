const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Numbers Divisible by 2', evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log('Numbers Greater than 5', overFive);

const startWithE = names.filter(name => name.startsWith('E'));
console.log("Names Start with 'E'", startWithE);

const haveD = names.filter(name => name.includes('D') === true || name.includes('d') === true);
console.log("Names include a 'D' or 'd'", haveD);
