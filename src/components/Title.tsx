import styled from "styled-components";

export default function Title({ title }) {
  return <H1>{title}</H1>;
}

const H1 = styled.h1`
  font-size: 54px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
