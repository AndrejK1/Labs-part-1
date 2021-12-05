console.log("Lab 6 - Nok\n");

const nok = (...nums) => {
    const nod = (a, b) => !b ? a : nod(b, a % b);
    const _nok = (a, b) => a * b / nod(a, b);

    return [...nums].reduce((a, b) => _nok(a, b));
};

const lab6Values = [
    [4, 5, 3],
    [1, 3, 2],
    [24, 35, 43]
];

lab6Values.forEach(values => console.log(`${values}, nok = ${nok(...values)}`));
