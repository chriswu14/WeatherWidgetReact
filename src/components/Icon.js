import React from 'react'

const YahooConditionIcon = props => {
    let iconClass = 'wi wi-yahoo-' + props.conditionCode;
    return (
        <i className={iconClass}>
        </i>
    );
};
export default YahooConditionIcon;