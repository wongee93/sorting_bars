import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { bubCompareReducer, reset } from '../store/randomArraySlice';
import bubbleSort from '../SortLogic/bubbleSort';

const SortButtons = () => {
    const [sortSpeed, setSortSpeed] = useState(50);
    const dispatch = useDispatch();
    const randomArray = useSelector((state) => state.randomArray);

    useEffect(() => {
        handleResetArray(20);
    }, []);

    const handleResetArray = () => dispatch(reset(20));

    const handleBubbleSort = () => {
        const stateQueue = bubbleSort(randomArray);
        let timer = sortSpeed;
        for (let i = 0; i < stateQueue.length; i++) {
            setTimeout(() => {
                dispatch(bubCompareReducer(stateQueue[i]));
            }, timer);
            timer += sortSpeed;
        }
    };

    const handleMergeSort = () => {
    };

    return (
        <BtnWrapepr>
            <StyledButton
                onClick={() => {
                    window.location.reload();
                }}
            >
                Reset
            </StyledButton>
            <StyledButton onClick={() => handleBubbleSort()}>
                Bubble Sort
            </StyledButton>
            <StyledButton onClick={() => handleMergeSort()}>
                Merge Sort
            </StyledButton>
        </BtnWrapepr>
    )
};

const BtnWrapepr = styled.div`
    width: 80vw;
    padding-top: 25px;
    padding-bottom: 25px;
    display: flex;
    justify-content: center;
`

const StyledButton = styled.button`
	width: 200px;
	height: 60px;
    margin-left: 20px;
    margin-right: 20px;
	border-radius: 10px;
    font-size: 25px;
    background-color: black;
    font-weight: bold;
    color: white;
`;

export default SortButtons;
