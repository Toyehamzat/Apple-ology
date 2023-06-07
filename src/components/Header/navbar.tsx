import "./styles.tsx";
import { List, Heart, Person, Bag } from "react-bootstrap-icons";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext.tsx";
import { Cart, CartNumber, Container, Icons, Title, Icon } from "./styles.tsx";
export function Header() {
  const { CartQuantity } = useShoppingCart();
  return (
    <Navbar>
      <Container>
        <Icon>
          <List id="list " className="reduce" size={25} />
        </Icon>
        <Link to="/" id="link">
          <Title>Apple-ology</Title>
        </Link>
        <Icons>
          {/* <Link id="link" to="/likedItem" as={NavLink}> */}
          <Heart className="reduce" size={25} />
          {/* </Link> */}
          {/* <Link id="link" to="profile" as={NavLink}> */}
          <Person className="reduce" size={25} />
          {/* </Link> */}
          <Cart id="link" to="/Cart" as={NavLink}>
            <Bag className="reduce" size={25} />
            {CartQuantity > 0 && <CartNumber>{CartQuantity}</CartNumber>}
          </Cart>
        </Icons>
      </Container>
    </Navbar>
  );
}
