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
                <ArrayBar
                    key={idx}
                    styleBar={{
                        height: val.value,
                        backgroundColor: val.state.color,
                    }}
                />
            ))}
        </BarWrapper>
    );
};

export default BarChart;

const BarWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;