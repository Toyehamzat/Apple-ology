import { useShoppingCart } from "../context/shoppingCartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRight, Paypal } from "react-bootstrap-icons";
import { Button, Stack } from "react-bootstrap";
import { CartItem } from "../components/CartItem";
import { CurrencyFormat } from "../utilities/currencyFormatter";
import productarray from "../data/productarray.json";
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
                Total{" "}
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
      </Container>
    </>
  );
}

const Container = styled.section`
  margin-top: 20px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div``;

const Route = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 45%;
  height: 600px;
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-right: 10px;
`;

const Right = styled.div`
  width: 55%;
  display: flex;
  justify-content: right;
  position: relative;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const SummaryContainer = styled.div`
  /* position: fixed; */
  height: 550px;
  width: 500px;
  background-color: #e2eef4;
  padding: 40px 40px;
`;

const Input = styled.input`
  padding-top: 20px;
  background: transparent;
  outline: none;
  /* border: none; */
  width: 200px;
  border-left: none;
  border-right: none;
  border-top: 1px black;
  margin-bottom: 60px;
`;
const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 600;
`;

const EstimatedTax = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
`;
const EstitmatedShipping = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
`;
const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 30px;
  margin-bottom: 25px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const CheckOutBtn = styled.button`
  width: 210px;
  padding: 18px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin: auto;
`;

const PayPalBtn = styled.button`
  width: 210px;
  padding: 10px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #b4b4b4;
  margin: auto;
`;
