import styled from 'styled-components';

const GridItem = styled.div`
    text-align: center;
    grid-column: ${props => props.colspan ? 'span ' + props.colspan : null};
    grid-row: ${props => props.rowspan ? 'span ' + props.rowspan : null};
    align-self: ${props => props.alignSelf ? props.alignSelf : null};
    background: ${props => props.darkened ? 'rgba(0,0,0,0.6)' : null};
    padding: 20px 25px;

    @media (min-width: 481px) {               
       text-align: left;
    }
`;

export default GridItem;