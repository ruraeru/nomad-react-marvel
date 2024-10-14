import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { fetchCharsData } from '../api';

const Content = styled.div`
    max-width: 1240px;
    padding: 10px 20px 0;
    margin: 0 auto;
    overflow: hidden;
    `;

const BaseContent = styled.div`
    display: grid;
    column-gap: 10px;
    row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(15.82%, 1fr));
    grid-template-rows: repeat(1,fr);
    img {
        border-radius: 15px 15px 0 0;
        height: 210px;
        object-position: top center;
        transition: all .2s linear;
        display: block;
        width: 100%;
        object-fit: cover;
    }
`;

const CardBody = styled.div`
    padding: 16px 24px 17px 20px;
    background-color: #151515;
    height: 75px;
    &:first-child {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    border-radius: 0 0 15px 15px;
`;

const CardFooter = styled.div`
    bottom: 17px;
    /* position: absolute; */
    padding-right: 10px;
    text-align: left;
    font-size: 12px;

`;

export default function Home() {
    const [isLoading, setLoading] = useState(true);

    const [Chars, setChars] = useState([]);
    const fetchChars = async () => {
        const data = await fetchCharsData();
        setChars(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchChars();
    }, []);
    return (
        <Content>
            <div>
                <Header text="Featured Characters" />
            </div>
            {isLoading ? (
                <div>
                    <Loading text="The hero is on his way..." />
                </div>
            ) : (
                <BaseContent>
                    {Chars.map((char) => (
                        <Link to={`/character/${char.id}`} key={char.id}>
                            <div>
                                <figure>
                                    {char.thumbnail.path.split('/')[10] ===
                                        'image_not_available' ? (
                                        <img
                                            src={`https://i.pinimg.com/736x/8c/6f/a4/8c6fa43cf3ddea45cedc4a5bfcd5e017.jpg`}
                                            alt="wanted hero"
                                        />
                                    ) : (
                                        <img
                                            src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                                            alt={char.name}
                                        />
                                    )}
                                </figure>
                            </div>
                            <CardBody>
                                <p>{char.name}</p>
                                <CardFooter>
                                    <p>{char.modified.split('T')[0].split('-')[0]}</p>
                                    {/* <p>{char.description.slice(0, 10)}...</p> */}
                                </CardFooter>
                            </CardBody>
                        </Link>
                    ))}
                </BaseContent>
            )
            }
        </Content >
    );
}
