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

const getDataRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const symbols = ['-', '+', '*'];
  const randomIndex = getRandomNumber(0, (symbols.length - 1));
  const randomSymbol = symbols[randomIndex];
  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const rightAnswer = String(makeCalc(randomSymbol, firstNumber, secondNumber));

  return [question, rightAnswer];
};

export default () => runGame(getDataRound, condition);
