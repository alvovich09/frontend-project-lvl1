import readlineSync from 'readline-sync';

const runCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const getRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
  };

  const getRandomElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  const calc = (element, first, second) => {
    switch (element) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      default:
        return NaN;
    }
  };

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const arr = ['-', '+', '*'];
    const symbol = getRandomElement(arr);
    const result = calc(symbol, number, secondNumber);
    console.log(`Question: ${number} ${symbol} ${secondNumber}`);
    const answerNumber = readlineSync.question('Your answer:');
    if (answerNumber === String(result)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default runCalcGame;
