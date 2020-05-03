import getRandomNumber from '../getrandom.js';
import runGame from '../index.js';

const runPrimeGame = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getData = () => {
    const data = [];

    const isPrime = (number) => {
      if (number < 2) {
        return 'no';
      }

      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const question = getRandomNumber(1, 100);
    const rightAnswer = String(isPrime(question));
    data.push(question);
    data.push(rightAnswer);

    return data;
  };
  runGame(getData, condition);
};
export default runPrimeGame;
