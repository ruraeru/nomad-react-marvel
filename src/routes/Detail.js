import { useEffect, useState } from 'react';
import {
    useHistory,
    useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import Header from '../components/Header';
import Loading from '../components/Loading';
import WantedImg from '../components/WantedImg';
import { fetchCharDetailData } from '../api';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    width: 100vw;
    background-color: #151515;
    overflow: scroll;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    /* width: 400px; */
    img {
        align-self: center;
        width: 400px;
        border-radius: 15px;
        margin-top: 10px;
    }      
    background-color: transparent;  
`;

const Info = styled.div`
    width: 100vw;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
        font-size: 36px;
        font-weight: 800;
    }
`;

export default function Detail() {
    const { id } = useParams();
    const history = useHistory();
    const [detail, setDetail] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const fetchCharDetail = async () => {
        const data = await fetchCharDetailData(id);
        setDetail(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchCharDetail();
    }, [id]);

    return (
        <Container>
            <Header text={detail.name} btnActive={true} />
            {isLoading ? (
                <Loading />
            ) : (
                <Content>
                    {detail.thumbnail.path.split('/')[10] === 'image_not_available' ? (
                        <WantedImg />
                    ) : (
                        <img
                            src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
                            alt={detail.name}
                        />
                    )}
                    <Info>
                        <p className="name">{detail.name}</p>
                        <p>출연 작품</p>
                        <ul>
                            {detail.comics.items.map((item, i) => (
                                <li key={i}>{item.name}</li>
                            ))}
                        </ul>
                    </Info>
                </Content>
            )}
        </Container>
    );
}
