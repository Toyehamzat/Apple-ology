import styled from "styled-components";
export const FooterWrapper = styled.footer`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 1.3rem;
  height: 50px;
  background: transparent;
  @media (max-width: 460px) {
   font-size:.9rem 
  }
  height:100px
`;

export const GithubLink = styled.a`
  display: flex;
  margin-left: .5rem;
  color: black;
  font-size: 2rem;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.5) rotate(360deg);
  }
  @media (max-width: 460px) {
   font-size:1.3rem 
  }
`;
