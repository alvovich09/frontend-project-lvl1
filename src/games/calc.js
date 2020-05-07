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

const getData = () => {
  const number = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const symbols = ['-', '+', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const randomSymbol = symbols[randomIndex];
  const question = `${number} ${randomSymbol} ${secondNumber}`;
  const rightAnswer = String(makeCalc(randomSymbol, number, secondNumber));

  return [question, rightAnswer];
};

const runCalcGame = () => { runGame(getData, condition); };

export default runCalcGame;
