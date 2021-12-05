console.log("Lab 4 - Conbinations (k to n)\n");

const binomialCalc = (n, k) => {
    if (Number.isNaN(n) || Number.isNaN(k)) {
        return NaN;
    }

    if (n < 0 || k < 0 || k > n) {
        return 0;
    }

    if (k === 0 || k === n) {
        return 1;
    }

    if (k === 1 || k === n - 1) {
        return n;
    }

    if (n - k < k) {
        k = n - k;
    }

    let result = n;

    for (let i = 2; i <= k; i++) {
        result *= (n - i + 1) / i;
    }

    return Math.round(result);
}

const lab4Values = [
    { n: 5, k: 3 },
    { n: 8, k: 3 },
    { n: -1, k: 3 },
    { n: 2, k: 3 }
];

lab4Values.forEach(value =>
    console.log(`n = ${value.n}, k = ${value.k} => ${binomialCalc(value.n, value.k)} combinations`));
