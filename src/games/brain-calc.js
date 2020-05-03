import getRandomNumber from '../getrandom.js';
import runGame from '../index.js';

const runCalcGame = () => {
  const condition = 'What is the result of the expression?';

  const getData = () => {
    const data = [];

    const getRandomSymbol = (symbols) => {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      return symbols[randomIndex];
    };

    const makeCalc = (symbol, number, secondNumber) => {
      switch (symbol) {
        case '+':
          return number + secondNumber;
        case '-':
          return number - secondNumber;
        case '*':
          return number * secondNumber;
        default:
          return NaN;
      }
    };


    const number = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);
    const symbols = ['-', '+', '*'];
    const randomSymbol = getRandomSymbol(symbols);
    const question = `${number} ${randomSymbol} ${secondNumber}`;
    const rightAnswer = String(makeCalc(randomSymbol, number, secondNumber));
    data.push(question);
    data.push(rightAnswer);

    return data;
  };

  runGame(getData, condition);
};

export default runCalcGame;
