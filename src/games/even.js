import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getDataRound = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(getDataRound, condition);
