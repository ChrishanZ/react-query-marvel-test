import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<UserPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", Courier, monospace;
  padding: 30px;
  background-color: rgb(17 24 39);
  color: rgb(249 250 251);
`;
