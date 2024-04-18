import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Title>Hello World !</Title>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", Courier, monospace;
`;

const Title = styled.h1`
  font-size: 54px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
