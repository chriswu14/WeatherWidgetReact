import styled from 'styled-components';

const Grid = styled.div`
    position: relative;
    color: white;
    
    @media (min-width: 481px) {               
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export default Grid;