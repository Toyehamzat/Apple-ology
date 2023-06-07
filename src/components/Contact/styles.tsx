import styled from "styled-components";
export const ContactWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      rgba(214, 225, 230, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    #ffffff;
  align-items: center;
  width: 100%;
  animation: fadeIn ease 2s;
  justify-content: center;
  gap: 8rem;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 5rem;
  justify-content: center;

  @media (max-width: 800px) {
    gap: 3rem;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: black;

  &:hover {
    transform: scale(1.1);
  }
`;
