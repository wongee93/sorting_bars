const bubbleSort = (randomArray) => {
    const array = [...randomArray];
    const stateQueue = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - (i + 1); j++) {
            // 선택되는 index
            let operations = { selectedIdx: j };
            stateQueue.push(operations);

            // 비교하는 두 index 중, 이전 index 값이 더 클때(swap)
            if (array[j].value > array[j + 1].value) {
                operations = { selectedIdx: j, compareIdx: j + 1 };
                stateQueue.push(operations);
                operations = { selectedIdx: j, swapIdx: j + 1 };
                stateQueue.push(operations);

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            // 모든 비교를 마쳤을 때
            if (j === array.length - (i + 2)) {
                operations = { selectedIdx: j + 1, defaultIdx: j };
                stateQueue.push(operations);
            } else {
                operations = { defaultIdx: j };
                stateQueue.push(operations);
            }
        }
    }
    stateQueue.push({ selectedIdx: 0 });
    return stateQueue;
};

export default bubbleSort;
