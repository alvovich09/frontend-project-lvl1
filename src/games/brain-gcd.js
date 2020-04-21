import readlineSync from 'readline-sync';

const runGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const getRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
  };

  const findDevisor = (first, second) => {
    const stack = [];

    for (let devisor = 1; (devisor <= first) && (devisor <= second); devisor += 1) {
      if ((first % devisor === 0) && (second % devisor === 0)) {
        stack.push(devisor);
      }
    }
    return stack.pop();
  };

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const rightDevisor = findDevisor(number, secondNumber);
    console.log(`Question: ${number} ${secondNumber}`);
    const answerNumber = readlineSync.question('Your answer:');
    if (answerNumber === String(rightDevisor)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${rightDevisor}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default runGcdGame;
