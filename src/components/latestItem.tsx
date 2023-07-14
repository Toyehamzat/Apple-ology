type LatestItemProp = {
  id: number;
  name: string;
  describtion: string;
  price: number;
  images: string;
};
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { CurrencyFormat } from "../utilities/currencyFormatter";
export function LatestItem({
  name,
  describtion,
  price,
  images,
}: LatestItemProp) {
  return (
    <Container>
      <TextContainer>
        <Name>{name}</Name>
        <Describtion>{describtion}</Describtion>
        <Price>Starting from {CurrencyFormat(price)}</Price>
      </TextContainer>
      <Img src={`images/${images}.jpg`} />
    </Container>
  );
}

const Img = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Container = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 400px;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: black;

  @media (max-width: 1115px) {
    width: 390px;
    height: 450px;
  }
  @media (max-width: 550px) {
    width: 374px;
    height: 450px;
  }
  @media (max-width: 465px) {
    width: 357px;
    height: 450px;
  }
  @media (max-width: 438px) {
    width: 358px;
    height: 440px;
  }
`;

const TextContainer = styled.div`
  color: #ffffff;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 80%;
`;

const Name = styled.div`
  color: #ededed;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 7px;
`;

const Describtion = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 7px;
  @media (max-width: 1115px) {
    font-size: 18px;
  }
`;

const Price = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
`;
