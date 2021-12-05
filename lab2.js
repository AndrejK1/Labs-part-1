console.log("Lab 2 - distances\n");

// 2d
const distance2D = (x0, y0, x1, y1) => Math.hypot(x0 - x1, y0 - y1);

const lab2Values = [
    { x0: 0, y0: 0, x1: 3, y1: 4 },
    { x0: 3, y0: -1, x1: 3, y1: 10 },
    { x0: 234, y0: -12, x1: 334, y1: -44 }
];

lab2Values.forEach(data => {
    console.log(distance2D(data.x0, data.y0, data.x1, data.y1)); // 5
});

const distance = (firstPointCoord, secondPointCoord) => {
    if (firstPointCoord.length !== secondPointCoord.length) {
        throw new RangeError("The number of x and y values is not equal!")
    }

    return Math.hypot(...Object.keys(firstPointCoord)
        .map(idx => firstPointCoord[idx] - secondPointCoord[idx]))
};

const lab2_1Values = [
    { f: [1, 1], s: [2, 2] },
    { f: [1, 1, 1], s: [2, 2, 2] },
    { f: [112, 2, 23, 1], s: [2, 2, 3, 2] }
];

lab2_1Values.forEach(data => console.log(distance(data.f, data.s)));
