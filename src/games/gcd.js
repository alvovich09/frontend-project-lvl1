import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const makeCommonDivisor = (first, second) => {
  if (second === 0) {
    return first;
  }

  return makeCommonDivisor(second, first % second);
};


const getData = () => {
  const number = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${number} ${secondNumber}`;
  const rightAnswer = makeCommonDivisor(number, secondNumber);

  return [question, rightAnswer];
};

const runGcdGame = () => { runGame(getData, condition); };
export default runGcdGame;
