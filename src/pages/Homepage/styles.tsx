import styled from "styled-components";

export const Container = styled.section`
  padding: 0px 0px;
  height: auto;
`;

export const FirstSection = styled.section`
  width: 100%;
  height: 100vh;
  animation: fadeIn ease 2s;
  position: relative;
  z-index: -1;

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
  top: 13%;
  width: 42%;
  height: 500px;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  padding-top: 100px;
  background: transparent;
  min-width: 414px;
  text-align: left;
  z-index: 1000;

  @media (max-width: 770px) {
    padding: 80px 30px;
    min-width: 359px;
  }

  @media (max-width: 550px) {
    top: 18%;
    padding: 30px 15px;
  }
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  backdrop-filter:blur(6px);
  color: #ffffff;
  padding: 20px;
  width: 180px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-top: 15px;
  outline: 0;
  border: none;
  overflow: hidden;
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

export const ImageCon = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;
export const Image = styled.img`
  position: absolute;
  top: -50%;
  left: 40%;
  transform: rotate(20deg);
`;
