import readlineSync from 'readline-sync';

const runGame = (getData, condition) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  for (let i = 1; i <= 3; i += 1) {
    const [question, rightAnswer] = getData();
    console.log(`Question: ${question}`);
    const userNumber = readlineSync.question('Your answer:');
    if (userNumber === String(rightAnswer)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${userNumber} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default runGame;
