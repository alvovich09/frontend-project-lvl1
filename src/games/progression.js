import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'What number is missing in the progression?';

const size = 10;

const makeProgression = (first, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    const element = first + (i * step);
    progression.push(element);
  }

  return progression;
};

const getRound = () => {
  const missingNumber = getRandomNumber(1, size);
  const first = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = makeProgression(first, step);
  const rightAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = String(progression.join(' '));

  return [question, rightAnswer];
};


export default () => runGame(getRound, condition);
