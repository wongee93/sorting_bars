function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetArray(num) {
    const array = [];
    while (array.length < num) {
        let num = randomNum(1, 20) * 30;
        if (!array.some(item => item.value === num)) {
            array.push({ value: num, state: { color: 'pink' } });
        }
    }
    return array;
}

export default resetArray;