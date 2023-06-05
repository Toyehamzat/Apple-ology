import "./styles.tsx";
import styled from "styled-components";
import { List, Heart, Person, Bag } from "react-bootstrap-icons";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext.tsx";
export function Header() {
  const { OpenCart, CartQuantity } = useShoppingCart();
  return (
    <Navbar sticky="top">
      <Container>
        <Icon>
          <List id="list " size={25} />
        </Icon>
        <Link to="/" id="link">
          <Title>Apple-ology</Title>
        </Link>
        <Icons>
          <Link id="link" to="/likedItem" as={NavLink}>
            <Heart size={25} />
          </Link>
          <Link id="link" to="profile" as={NavLink}>
            <Person size={25} />
          </Link>
          <Cart id="link" to="/Cart" as={NavLink} onClick={OpenCart}>
            <Bag size={25} />
            {CartQuantity > 0 && <CartNumber>{CartQuantity}</CartNumber>}
          </Cart>
        </Icons>
      </Container>
    </Navbar>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: black;
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

const Icon = styled.div`
  cursor: pointer;
`;

const Cart = styled.button`
  position: relative;
`;
const CartNumber = styled.div`
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12px;
  width: 12px;
  font-size: 11px;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
`;
