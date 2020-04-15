import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number;
  };

  const evenNumber = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answerNumber = readlineSync.question('Your answer:');
    if (answerNumber === evenNumber(number)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${evenNumber(number)}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default askName;