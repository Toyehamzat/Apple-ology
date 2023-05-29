// import { Swiper } from "swiper/types";
// import { SwiperSlide } from "swiper/react";
import "./styles.tsx";
import styled from "styled-components";
import { List, Heart, Person, Bag } from "react-bootstrap-icons";

export function Header() {
  return (
    <Container>
      <List size={25} />
      <Title>Apple-ology</Title>
      <Icons>
        <Heart size={25} />
        <Person size={25} />
        <Bag size={25} />
      </Icons>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  background: transparent;
  position: fixed;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  cursor: pointer;

`;

const Icons = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
