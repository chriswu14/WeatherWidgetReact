import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : null};
    align-items: ${props => props.alignItems ? props.alignItems : null};
    padding: ${props => props.padding ? props.padding : null};
`;

export default Flex;