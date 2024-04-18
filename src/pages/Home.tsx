import { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Title from "../components/Title";
import Loader from "../components/Loader";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = () => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?events=238&ts=1&limit=24&apikey=3f14a02022b1c9fd316870ea071a412c&hash=86930afd5a3e293ea2bcd8a08938981c"
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
