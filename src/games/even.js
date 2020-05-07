import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question);

  return [question, rightAnswer];
};

const runEvenGame = () => { runGame(getData, condition); };

export default runEvenGame;
