import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import styled from "styled-components";
export function SavedItems() {
  return (
    <>
      <Container>
        <Route>
          <Link to="/" id="link">
            Home
          </Link>
          <ChevronRight size={11} /> <span className="grey">Liked Items</span>
        </Route>
        <h3>UNDER DEVELOPMENT...</h3>
      </Container>
    </>
  );
}
const Container = styled.section`
  margin-top: 20px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  @media (max-width: 496px) {
    padding: 0 40px;
  }

  @media (max-width: 415px) {
    padding: 0 30px;
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;


const Route = styled.div`
  margin-bottom: 40px;
  font-size: 15px;
`;