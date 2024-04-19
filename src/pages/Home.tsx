import { useQuery } from "@tanstack/react-query";

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
  const getCharacters = async (): Promise<ICharacters[]> => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?events=238&ts=1&limit=24&apikey=${
        import.meta.env.VITE_API_KEY
      }&hash=${import.meta.env.VITE_HASH_API_KEY}`
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }

    const data = await response.json();
    // Return the data
    return data.data.results;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  return (
    <>
      <Title title={"Choose your character"} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Cards>
            {data.map((char) => (
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
