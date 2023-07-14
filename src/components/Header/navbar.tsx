import "./styles.tsx";
import { List, Heart, Person, Bag, ChevronUp } from "react-bootstrap-icons";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext.tsx";
import {
  Cart,
  CartNumber,
  Container,
  Icons,
  Title,
  Icon,
  Profile,
  Dropdown,
  DropdownMenuList,
  DropdownMenuItem,
} from "./styles.tsx";
import { useState } from "react";
export function Header() {
  const { CartQuantity } = useShoppingCart();
  // const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
    // setSelectedOption(option);
    setIsOpen(false);
  };

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
          <Dropdown>
            <Profile>
              <Person className="reduce" size={25} />
              <ChevronUp onClick={toggleDropdown} className={isOpen? "chevronup active":"chevronup"} size={13} />
            </Profile>
            {isOpen && (
              <DropdownMenuList>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect()}
                >
                  Option 1
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect()}
                >
                  Option 2
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect()}
                >
                  Option 3
                </DropdownMenuItem>
              </DropdownMenuList>
            )}
          </Dropdown>
          <Cart id="link" to="/Cart" as={NavLink}>
            <Bag className="reduce" size={25} />
            {CartQuantity > 0 && <CartNumber>{CartQuantity}</CartNumber>}
          </Cart>
        </Icons>
      </Container>
    </Navbar>
  );
}
