import readlineSync from 'readline-sync';

const runGame = (getData, condition) => {
  const round = 3; 
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  for (let i = 1; i <= round; i += 1) {
    const [question, rightAnswer] = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    const correctAnswer = String(rightAnswer);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === round) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`)
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default runGame;
