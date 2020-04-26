import readlineSync from 'readline-sync';

const runProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const getRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
  };

  const makeProgression = (numberArr, randomNumber, randomPlus) => {
    let result = 0;
    const stack = [];
    const stack2 = [];

    for (let i = 1; i <= 9; i += 1) {
      result = randomNumber + (i - 1) * randomPlus;
      stack.push(result);
    }
    stack2.push(stack[numberArr]);
    stack[numberArr] = '..';
    return stack;
  };

  const makeMissingSymbol = (numberArr, randomNumber, randomPlus) => {
    let result = 0;
    const stack = [];
    const stack2 = [];

    for (let i = 1; i <= 10; i += 1) {
      result = randomNumber + (i - 1) * randomPlus;
      stack.push(result);
    }
    stack2.push(stack[numberArr]);
    stack[numberArr] = '..';
    return stack2;
  };

  for (let i = 1; i <= 3; i += 1) {
    const numberArr = getRandomNumber(1, 10);
    const randomNumber = getRandomNumber(1, 50);
    const randomPlus = getRandomNumber(1, 10);
    const progression = makeProgression(numberArr, randomNumber, randomPlus);
    const missingSymbol = makeMissingSymbol(numberArr, randomNumber, randomPlus);
    console.log(`Question: ${progression}`);
    const answerNumber = readlineSync.question('Your answer:');
    if (answerNumber === String(missingSymbol)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${missingSymbol}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default runProgressionGame;
