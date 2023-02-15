import React from 'react';
import styled from 'styled-components';

const ArrayBar = (props) => {
	return <StyledBar style={props.styleBar}></StyledBar>;
};

const StyledBar = styled.div`
	width: 4vw;
	max-height: 80vh;
	border: 1px solid palevioletred;
	border-radius: 5px;
`;

export default ArrayBar;