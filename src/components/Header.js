import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    font-size: 48px;
    font-weight: 800;
    justify-content: center;
    align-items: center;
    min-height: 125px;
    text-transform: uppercase;
    background-color: #EC1D25;
    margin-bottom: 20px;
    text-align: center;
`;

export default function Header({ text }) {
    return <Title>{text}</Title>;
}
