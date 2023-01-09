import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setRandomArray } from "../store/randomArraySlice";

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
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
    const dispatch = useDispatch();
    const randomArray = useSelector((state) => state.randomArray);

    useEffect(() => {
        dispatch(setRandomArray(createRandomArray()));
    }, [dispatch]);

    useEffect(() => {
        setBarHeights(randomArray);
    }, [randomArray]);

    const barElements = barHeights.length > 0 && barHeights.map((height, index) => (
        <div key={index} style={{ height: height * 30 + 'px' }} className="bar" />
    ));

    return <div className="bar_container">{barElements}</div>;
}

export default BarChart;