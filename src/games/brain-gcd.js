import getRandomNumber from '../getrandom.js';
import runGame from '../index.js';

const runGcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';

  const getData = () => {
    const data = [];

    const makeCommonDevisor = (first, second) => {
      const rightDevisor = [];

      for (let devisor = 1; (devisor <= first) && (devisor <= second); devisor += 1) {
        if ((first % devisor === 0) && (second % devisor === 0)) {
          rightDevisor.push(devisor);
        }
      }
      return rightDevisor.pop();
    };

    const number = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 100);
    const question = `${number} ${secondNumber}`;
    const rightAnswer = makeCommonDevisor(number, secondNumber);
    data.push(question);
    data.push(rightAnswer);

    return data;
  };
  runGame(getData, condition);
};
export default runGcdGame;
