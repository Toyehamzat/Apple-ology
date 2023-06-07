import { useShoppingCart } from "../../context/shoppingCartContext";
import { Link } from "react-router-dom";
import { ChevronRight, Paypal } from "react-bootstrap-icons";
import { Stack } from "react-bootstrap";
import { CartItem } from "../../components/CartItem";
import { CurrencyFormat } from "../../utilities/currencyFormatter";
import productarray from "../../data/productarray.json";
import {
  Container,
  Header,
  Route,
  Body,
  Left,
  Right,
  SummaryContainer,
  Title,
  Input,
  Subtotal,
  EstimatedTax,
  EstitmatedShipping,
  Total,
  Buttons,
  CheckOutBtn,
  PayPalBtn,
} from "./styles";
import { Footer } from "../../components/footer/footer";
export function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <Container>
        <Header>
          <h1>Shopping Cart</h1>
          <Route>
            <Link to="/" id="link">
              Home
            </Link>{" "}
            <ChevronRight size={11} />{" "}
            <Link to="/Products" id="link">
              Products
            </Link>{" "}
            <ChevronRight size={11} />{" "}
            <span className="grey">Shopping Cart</span>
          </Route>
        </Header>
        <Body>
          <Left>
            <Stack className="w-100" gap={5}>
              {cartItems.map((items) => (
                <CartItem key={items.id} {...items} />
              ))}
            </Stack>
          </Left>
          <Right>
            <SummaryContainer>
              <Title>Order Summary</Title>
              <Input
                type="text"
                placeholder="Enter promo code/Gift Certificate"
              />
              <div className="flexcol">
                <Subtotal>
                  Subtotal{" "}
                  <span className="grey">
                    {" "}
                    {CurrencyFormat(
                      cartItems.reduce((total, CartItem) => {
                        const item = productarray.find(
                          (i) => i.id === CartItem.id
                        );
                        return total + (item?.price || 0) * CartItem.quantity;
                      }, 0)
                    )}
                  </span>
                </Subtotal>
                <EstimatedTax>
                  Estimated Tax <span className="grey">-----</span>
                </EstimatedTax>
                <EstitmatedShipping>
                  Estimated Shipping & Handling{" "}
                  <span className="grey">$0.00</span>
                </EstitmatedShipping>
              </div>
              <Total>
                Total 
                <span>
                  {CurrencyFormat(
                    cartItems.reduce((total, CartItem) => {
                      const item = productarray.find(
                        (i) => i.id === CartItem.id
                      );
                      return total + (item?.price || 0) * CartItem.quantity;
                    }, 0)
                  )}
                </span>
              </Total>

              <Buttons>
                <CheckOutBtn>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    id="link"
                  >
                    Check Out
                  </a>
                </CheckOutBtn>
                <PayPalBtn>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    id="link"
                  >
                    <Paypal size={30} />
                  </a>
                </PayPalBtn>
              </Buttons>
            </SummaryContainer>
          </Right>
        </Body>
        <Footer/>
      </Container>
    </>
  );
}
