console.log("Lab 5 - Hamming Distance\n");

const hammingDistance = (first, second) => (first ^ second).toString(2).match(/1/g)?.length || 0;

const lab5Values = [
    { f: 22, s: 22 },
    { f: 22, s: 33 },
    { f: -1, s: -1 },
    { f: 123996989, s: 123456789 },
    { f: 4, s: 5 }
];

lab5Values.forEach(value =>
    console.log(`f = ${value.f}, s = ${value.s} => ${hammingDistance(value.f, value.s)} distance`));