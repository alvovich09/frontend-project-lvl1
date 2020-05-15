import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'What is the result of the expression?';

const makeCalc = (symbol, number, secondNumber) => {
  switch (symbol) {
    case '+':
      return number + secondNumber;
    case '-':
      return number - secondNumber;
    case '*':
      return number * secondNumber;
    default:
      throw new Error(`Unknown symbol - ${symbol}`);
  }
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const operations = ['-', '+', '*'];
  const randomIndex = getRandomNumber(0, operations.length - 1);
  const randomOperation = operations[randomIndex];
  const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
  const rightAnswer = String(makeCalc(randomOperation, firstNumber, secondNumber));

  return [question, rightAnswer];
};

export default () => runGame(getRound, condition);
