import React from 'react'
import styled from 'styled-components';

const Icon = props => {
    let iconClass = 'wi wi-yahoo-' + props.conditionCode;
    return (
        <IconWrapper className={iconClass}>
        </IconWrapper>
    );
};
export default Icon;

const IconWrapper = styled.i`
    margin-right: 10px;
`;