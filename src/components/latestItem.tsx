import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
export function LatestItem({ latest }) {
  return (
    <Container href={latest.link}>
      <TextContainer>
        <Name>{latest.name}</Name>
        <Describtion>{latest.describtion}</Describtion>
        <Price>Starting from {`$${latest.price}.99`}</Price>
      </TextContainer>
      <Img src={`images/${latest.images}.jpg`} />
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
`;

const Price = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
`;
