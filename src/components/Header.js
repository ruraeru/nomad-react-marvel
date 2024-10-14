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
    }

    p {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const BackBtn = styled.button`

`

export default function Header({ text }) {
    const history = useHistory();
    return (
        <Title>
            <BackBtn onClick={() => history.goBack()}>back</BackBtn>
            <h1>{text}</h1>
            {/* <p>(if you want to go back, press me)</p> */}
        </Title>
    );
}
