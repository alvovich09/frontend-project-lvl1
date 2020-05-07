import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'What number is missing in the progression?';

const makeProgression = (first, randomPlus) => {
  let result = 0;
  const progression = [];

  for (let i = 0; i <= 9; i += 1) {
    result = first + (i - 1) * randomPlus;
    progression.push(result);
  }
  return progression;
};

const getData = () => {
  const missingNumber = getRandomNumber(1, 10);
  const first = getRandomNumber(1, 50);
  const randomPlus = getRandomNumber(1, 10);
  const progression = makeProgression(first, randomPlus);
  const rightAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = String(progression);

  return [question, rightAnswer];
};


const runProgressionGame = () => { runGame(getData, condition); };

export default runProgressionGame;
