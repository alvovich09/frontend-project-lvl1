import getRandomNumber from '../getrandom.js';
import runGame from '../index.js';

const runEvenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getData = () => {
    const data = [];

    const isEven = (number) => {
      if (number % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };

    const question = getRandomNumber(1, 100);
    const rightAnswer = isEven(question);
    data.push(question);
    data.push(rightAnswer);

    return data;
  };
  runGame(getData, condition);
};

export default runEvenGame;
