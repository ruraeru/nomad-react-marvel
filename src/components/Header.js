import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

const Title = styled.div`
    display: grid;

    grid-template-columns: 1fr 10fr 1fr;

    margin:  0;
    
    min-height: 130px;
    height: 130px;
    
    margin-bottom: 20px;
    background-color: #EC1D25;
    
    h1 {
        font-size: 48px;
        font-weight: 800;
        text-align: center;
        text-transform: uppercase;

        align-self: center;

        grid-column: 2;
    }

    p {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const BackBtn = styled.button`
    display: ${props => props.btnActive ? "block" : "none"};
`

export default function Header({ text, btnActive = false }) {
    const history = useHistory();
    return (
        <Title>
            <BackBtn btnActive={btnActive} onClick={() => history.goBack()}>back</BackBtn>
            <h1>{text}</h1>
        </Title>
    );
}
