import React, { useState, useEffect } from 'react';

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min) * 30;
}

function createRandomArray() {
    let randomArray = new Array(20);
    for (let i = 0; i < 20; i++) {
        randomArray[i] = randomNum(1, 20);
    }
    return randomArray;
}

function BarChart() {
    const [barHeights, setBarHeights] = useState([]);

    useEffect(() => {
        const randomArray = createRandomArray();
        setBarHeights(randomArray);
    }, []);

    const barElements = barHeights.map((height, index) => (
        <div key={index} style={{ height: height }} className="bar" />
    ));

    return <div className="bar_container">{barElements}</div>;
}

export default BarChart;