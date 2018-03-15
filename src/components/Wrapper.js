import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    background-image: ${props => props.bgImg ? `url(${props.bgImg})` : null};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;        
        background: rgba(0,0,0,0.2);
    }
`;

export default Wrapper;