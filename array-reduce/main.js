const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const total = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(total);
console.log('sum:', sum);

const multiplied = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(multiplied);
console.log('product:', product);

const deposit = account.filter(obj => obj.type === 'deposit');
const depositTotal = (previousValue, currentValue) => previousValue + currentValue.amount;
const depositResult = deposit.reduce(depositTotal, 0);

const withdrawal = account.filter(obj => obj.type === 'withdrawal');
const withdrawalTotal = (previousValue, currentValue) => previousValue + currentValue.amount;
const withdrawalResult = withdrawal.reduce(withdrawalTotal, 0);

const balance = depositResult - withdrawalResult;
console.log('balance:', balance);

const source = (previousValue, currentValue) => Object.assign(previousValue, currentValue);
const composite = traits.reduce(source);
console.log('composite:', composite);
