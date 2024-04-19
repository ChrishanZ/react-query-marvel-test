import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:userId" element={<UserPage />} />
          </Routes>
        </Container>
        <ReactQueryDevtools />
      </QueryClientProvider>
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
