import "./styles.tsx";
import {
  Heart,
  Person,
  Bag,
  ChevronUp,
  ArrowBarRight,
  PersonFillAdd,
  GearFill,
} from "react-bootstrap-icons";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext.tsx";
import {
  Cart,
  CartNumber,
  Container,
  Icons,
  Title,
  Profile,
  Dropdown,
  DropdownMenuList,
  DropdownMenuItem,
  Label,
} from "./styles.tsx";
import { useState } from "react";
import { Sidebar } from "../sidebar/sidebar.tsx";
export function Header() {
  const { CartQuantity, TargetUpRef } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
    setIsOpen(false);
  };

  return (
    <Navbar ref={TargetUpRef}>
      <Container>
        <Sidebar />
        <Link to="/" id="link">
          <Title>Apple-ology</Title>
        </Link>
        <Icons>
          <Link id="link" to="/SavedItems">
            <Heart className="reduce" size={27} />
          </Link>
          <Cart id="link" to="/Cart" as={NavLink}>
            <Bag className="reduce" size={25} />
            {CartQuantity > 0 && <CartNumber>{CartQuantity}</CartNumber>}
          </Cart>
          <Dropdown>
            <Profile  onClick={toggleDropdown}>
              <Person className="reduce" size={25} />
              <ChevronUp
                onClick={toggleDropdown}
                className={isOpen ? "chevronup active" : "chevronup"}
                size={13}
              />
            </Profile>
            {isOpen && (
              <DropdownMenuList>
                <DropdownMenuItem onClick={() => handleOptionSelect()}>
                  <ArrowBarRight />
                  <Label>Sign In</Label>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleOptionSelect()}>
                  <PersonFillAdd />
                  <Label>SignUp</Label>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleOptionSelect()}>
                  <GearFill />
                  <Label>Setting</Label>
                </DropdownMenuItem>
              </DropdownMenuList>
            )}
          </Dropdown>
        </Icons>
      </Container>
    </Navbar>
  );
}
