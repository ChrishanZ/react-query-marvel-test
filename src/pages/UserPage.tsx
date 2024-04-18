import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import styled from "styled-components";
import Title from "../components/Title";
import Loader from "../components/Loader";

export default function UserPage() {
  const { userId } = useParams();
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacterInfos = () => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${userId}?ts=1&apikey=${
        import.meta.env.VITE_API_KEY
      }&hash=${import.meta.env.VITE_HASH_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data.results[0]);
        setCharacter(data.data.results[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCharacterInfos();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton to={"/"}>go back</BackButton>
          <Title title={character.name} />
          {character.thumbnail && (
            <ContainerImage>
              <Image
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="Character"
              />
            </ContainerImage>
          )}

          {character.description ? (
            <Description>{character.description}</Description>
          ) : (
            <Description>No description!</Description>
          )}
        </>
      )}
    </>
  );
}

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const Description = styled.p`
  margin-top: 36px;
`;

const BackButton = styled(Link)`
  position: absolute;
  left: 20px;
  top: 20px;
  color: rgb(249 250 251);
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgb(249 250 251);
  padding: 10px 10px;
  border-radius: 10px;
`;
