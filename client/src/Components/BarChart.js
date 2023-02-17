import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { initialArrayReducer } from '../store/randomArraySlice';
import ArrayBar from './ArrayBar';

const BarChart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialArrayReducer());
    }, []);

    const returnedArrayFromReducers = useSelector(
        (state) => state.randomArray
    );

    return (
        <BarWrapper>
            {returnedArrayFromReducers && returnedArrayFromReducers.map((val, idx) => (
                <ArrayBarWrapper>
                    {val.value / 30}
                    <ArrayBar
                        key={idx}
                        styleBar={{
                            height: val.value,
                            backgroundColor: val.state.color,
                        }}
                    />
                </ArrayBarWrapper>
            ))}
        </BarWrapper>
    );
};

export default BarChart;

const ArrayBarWrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: gray;
`

const BarWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;