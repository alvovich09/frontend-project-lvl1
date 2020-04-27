import readlineSync from 'readline-sync';

const runPrimeGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const getRandomNumber = (min, max) => {
        const number = Math.floor(Math.random() * (max - min)) + min;
        return number;
      };

    const isPrime = number => {
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

    for (let i = 1; i <= 3; i += 1) {
        const number = getRandomNumber(1, 100);
        const primeNumber = isPrime(number);
        console.log(`Question: ${number}`);
        const answerNumber = readlineSync.question('Your answer:');
        if (answerNumber === String(primeNumber)) {
            console.log('Correct!');
            if (i === 3) {
              console.log(`Congratulations, ${userName}`);
            }
          } else {
            console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${primeNumber}.\nLet's try again, ${userName}!`);
            break;
          }
    };
};
export default runPrimeGame;