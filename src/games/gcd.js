import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => (second === 0 ? first : getGcd(second, first % second));

const getRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, rightAnswer];
};

export default () => runGame(getRound, condition);
