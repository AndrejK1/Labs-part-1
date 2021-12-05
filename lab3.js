console.log("Lab 3 - prime number check\n");

const isPrime = n => {
    const sqrtN = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return n >= 2;
}

const lab3Values = [5, 25, 26, 18, -4, 1, 2];

lab3Values.forEach(value => console.log(`Is ${value} prime? ${isPrime(value)}!`));
