console.log("Lab 1 - factorial\n");

const fact = n => {
    if (n < 0) {
        throw new TypeError("Negative argument");
    }

    if (n <= 1) { // because 0! = 1
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

const lab1Values = [5, 0, -1];

lab1Values.forEach(value => {
    try {
        console.log(`${value}! = ${fact(value)}`);
    } catch (e) {
        console.error(`You can't calculate ${value}!`, e);
    }
});
