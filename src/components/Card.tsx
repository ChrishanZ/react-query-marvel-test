import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Card({ char }) {
  const { thumbnail, name } = char;
  return (
    <StyledLink to={`/users/${char.id}`}>
      <ImageWrapper>
        <Image
          src={thumbnail.path + "." + thumbnail.extension}
          alt="Character"
        />
      </ImageWrapper>
      <TitleCard>{name}</TitleCard>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  width: 200px;
  height: 200px;
  background-color: rgb(55 65 81);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  color: rgb(249 250 251);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TitleCard = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
