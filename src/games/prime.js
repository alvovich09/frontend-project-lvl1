import getRandomNumber from '../getRandom.js';
import runGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = String(isPrime(question));

  return [question, rightAnswer];
};

const runPrimeGame = () => { runGame(getData, condition); };
export default runPrimeGame;
