import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";

import styled from "styled-components";
import Title from "../components/Title";
import Loader from "../components/Loader";

interface IId {
  id: string;
}

export default function UserPage() {
  const { userId } = useParams();

  const getCharacterInfos = async (id: string | undefined) => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${
        import.meta.env.VITE_API_KEY
      }&hash=${import.meta.env.VITE_HASH_API_KEY}`
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }

    const data = await response.json();
    console.log(data);
    console.log(data.name);

    // Return the data
    return data.data.results[0];
  };

  const { data, isLoading } = useQuery({
    queryKey: ["characters", userId],
    queryFn: () => getCharacterInfos(userId),
    enabled: userId !== undefined,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton to={"/"}>Go back</BackButton>
          <Title title={data.name} />
          {data.thumbnail && (
            <ContainerImage>
              <Image
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt="character"
              />
            </ContainerImage>
          )}
          <Description>
            {data.description ? data.description : "No description!"}
          </Description>
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
