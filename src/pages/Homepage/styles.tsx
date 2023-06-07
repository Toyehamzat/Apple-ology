import styled from "styled-components";
export const Container = styled.section`
  padding: 0px 0px;
  height: auto;
`;

export const FirstSection = styled.section`
  width: 100%;
  height: 100vh;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const LeftScreen = styled.div`
  position: absolute;
  top: 10%;
  width: 45%;
  height: 500px;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  padding-top: 100px;
  background: transparent;
  min-width: 414px;

  @media (max-width: 770px) {
    padding: 80px 30px;
    min-width: 359px;
  }

  @media (max-width: 550px) {
    padding: 80px 30px;
    min-width: 359px;
  }

`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  width: 180px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    background-color: #ececec;
    transform: scale(1.1);
  }
`;

export const Title = styled.span`
  color: #000000;
  background: transparent;
`;

export const Intro = styled.div`
  color: #ffffff;
  // margin: auto;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  margin-bottom: 45px;
  background: transparent;
  @media (max-width: 770px) {
    font-size: 37px;
  }
  @media (max-width: 550px) {
    font-size: 35px;
  }
`;

export const SecondSection = styled.section`
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(214, 225, 230, 0.7)
    ),
    #ffffff;
  padding: 60px 60px;

  animation: fadeIn ease 2s;

  @media (max-width: 1115px) {
   padding: 60px 40px;
  }

  @media (max-width: 438px) {
    padding: 60px 20px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Latest = styled.label`
  color: #6b6b6b;
  font-size: 25px;
  font-weight: 600;
  background: transparent;
  @media (max-width: 550px) {
    font-size: 15px;
  
  }
`;

export const Black = styled.label`
  color: black;
  background: transparent;
`;

export const LatestContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
`;
