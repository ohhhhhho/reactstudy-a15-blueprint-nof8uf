import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { CharactersInfoApi } from '../api';
import styled from 'styled-components';
import Profile from '../components/Profile';
interface CharacterInfo {
  imageUrl: string;
  name: string;
  films: string[];
}
interface Params {
  id: string;
}
const Wrap = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  background-color:${(props) => props.theme.bgColor};
  padding-top:40px;
  height:100%;
`;
const ButtonBack = styled.button`
  background:none;
  border:none;
  color:${(props) => props.theme.textColor};
  font-size:30px;
  margin-bottom:20px;
`;
const ListWrap = styled.ul`
  margin-top:25px;
  display: flex;
  width: 50%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const ListItem = styled.li`
  background-color:${(props) => props.theme.textColor};
  border-radius:5px;
  padding:5px 10px;
  text-align:center;
`;
export function Details() {
  const { id } = useParams<Params>();
  const { isLoading, data } = useQuery<CharacterInfo>(['data', id], () =>
    CharactersInfoApi(id)
  );
  const Navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Wrap>
            <ButtonBack onClick={() => Navigate(-1)}>&#x2190;</ButtonBack>
            <Profile
              src={data?.imageUrl}
              alt={data?.name}
              text={data?.name}
              $textColor="white"
            />
            <ListWrap>
              {data?.films.map((i) => (
                <ListItem key={i}>{i}</ListItem>
              ))}
            </ListWrap>
          </Wrap>
        </>
      )}
    </>
  );
}
