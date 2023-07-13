import styled from "styled-components";
export const Container = styled.section`
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

export const Row = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 496px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media (max-width: 415px) {
    grid-template-columns: repeat(auto-fit, minmax(131px, 1fr));
  }
`;

export const Route = styled.div`
  margin-bottom: 40px;
  font-size: 15px;
`;
