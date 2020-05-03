import getRandomNumber from '../getrandom.js';
import runGame from '../index.js';

const runProgressionGame = () => {
  const condition = 'What number is missing in the progression?';

  const getData = () => {
    const data = [];

    const makeProgression = (numberArr, randomNumber, randomPlus) => {
      let result = 0;
      const progression = [];
      const hidenIndex = [];

      for (let i = 1; i <= 9; i += 1) {
        result = randomNumber + (i - 1) * randomPlus;
        progression.push(result);
      }
      hidenIndex.push(progression[numberArr]);
      progression[numberArr] = '..';
      return progression;
    };

    const makeMissingSymbol = (numberArr, randomNumber, randomPlus) => {
      let result = 0;
      const stack = [];
      const stack2 = [];

      for (let i = 1; i <= 10; i += 1) {
        result = randomNumber + (i - 1) * randomPlus;
        stack.push(result);
      }
      stack2.push(stack[numberArr]);
      stack[numberArr] = '..';
      return stack2;
    };

    const numberArr = getRandomNumber(1, 10);
    const randomNumber = getRandomNumber(1, 50);
    const randomPlus = getRandomNumber(1, 10);
    const question = String(makeProgression(numberArr, randomNumber, randomPlus));
    const rightAnswer = String(makeMissingSymbol(numberArr, randomNumber, randomPlus));
    data.push(question);
    data.push(rightAnswer);

    return data;
  };

  runGame(getData, condition);
};

export default runProgressionGame;
