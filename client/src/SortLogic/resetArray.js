function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetArray(num) {
    const array = [];
    for (let i = 0; i < num; i++) {
        let num = randomNum(1, 20) * 30;
        array.push({ value: num, state: { color: 'pink' } });
    }
    return array;
}

export default resetArray;