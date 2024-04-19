import { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Title from "../components/Title";
import Loader from "../components/Loader";

interface ICharacters {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = () => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?events=238&ts=1&limit=24&apikey=${
        import.meta.env.VITE_API_KEY
      }&hash=${import.meta.env.VITE_HASH_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data.results);
        setCharacters(data.data.results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Title title={"Choose your character"} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Cards>
            {characters.map((char) => (
              <Card key={char.id} char={char} />
            ))}
          </Cards>
        </>
      )}
    </>
  );
}

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
