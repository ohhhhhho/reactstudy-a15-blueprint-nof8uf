import { useQuery } from '@tanstack/react-query';
import { CharactersApi } from '../api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../components/Profile';
interface Character {
  id: string;
  imageUrl: string;
  name: string;
}
const Wrap = styled.div`
background-color:${(props) => props.theme.bgColor};
padding-top:40px;
`;
const Title = styled.h1`
  text-align:center;
  font-size:20px;
  color:${(props) => props.theme.textColor};
`;
const DetailWrap = styled.ul`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  gap: 50px 2.5rem;
  margin: 40px auto 0;
  li{
    flex: 0 1 200px;
    color:${(props) => props.theme.textColor};
    &:hover{
      background-color:${(props) => props.theme.textColor};
      border-radius:10px;
      color:${(props) => props.theme.bgColor};
      transition:0.5s;
    }
    a{
      display:flex;
      flex-flow: column;
      text-align: center;
      gap: 10px 0;
      img{
        margin:10px auto 0;
      }
    }
  }
`;

export function Home() {
  const { isLoading, data } = useQuery<Character>(['allData'], CharactersApi, {
    select: (data) => data.slice(0, 100),
  });
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Wrap>
            <Title>Desney Characters</Title>
            <DetailWrap>
              {data?.map((i) => (
                <li key={i.id}>
                  <Link to={`character/${i.id}`}>
                    <Profile src={i.imageUrl} alt={i.name} text={i.name} />
                  </Link>
                </li>
              ))}
            </DetailWrap>
          </Wrap>
        </>
      )}
    </>
  );
}
