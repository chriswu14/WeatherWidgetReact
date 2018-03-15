import React from 'react'
import styled from 'styled-components';

import Temperature from './Temperature';
import Flex from './Flex';

const ForecastItem = props => {
    return (
        <ForecastItemWrapper>
            <div className="text-sm">{props.condition}</div>
            <Flex justifyContent="space-between" alignItems="center">         
                <div><Temperature degree={props.low} /> - <Temperature degree={props.high} /></div>
                <div className="text-xs">{props.currentDay}</div>   
            </Flex>
        </ForecastItemWrapper>
    );
};

export default ForecastItem;

const ForecastItemWrapper = styled.div`
    border-bottom: 1px solid white;
    padding: 10px 10px 5px 10px;

    &:first-child {
        padding-top: 0;
    }
`;

