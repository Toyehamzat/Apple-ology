type ItemDetailsProps = {
  id: number;
  name: string;
  price: number;
  images: string;
  color: string;
};
import { Cart3, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";
import { useShoppingCart } from "../context/shoppingCartContext";

export default function ItemDetails({
  id,
  name,
  images,
  price,
  color,
}: ItemDetailsProps) {
  const {
    getItemQuantity,
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemaoveFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Container>
      <Route>
        <Link to="/" id="link">
          Home
        </Link>{" "}
        <ChevronRight size={11} />{" "}
        <Link to="/Products" id="link">
          Products
        </Link>{" "}
        <ChevronRight size={11} /> <span className="grey">{name} </span>
      </Route>
      <FirstSection>
        <Left>
          <Detail>
            <Name>{name}</Name>
            <Color>{color}</Color>
            <View>View all Details</View>
            <Price>{CurrencyFormat(price)}</Price>
          </Detail>

          <AddToCart>
            {quantity === 0 ? (
              <AddToCartBtn onClick={() => IncreaseCartQuantity(id)}>
                + Add to cart
                <Cart3 size={15} />
              </AddToCartBtn>
            ) : (
              <AddToCartActive>
                <AddMinus>
                  <AddMinusBtn onClick={() => DecreaseCartQuantity(id)}>
                    -
                  </AddMinusBtn>
                  <Quantity className="fs-10">{quantity} </Quantity>
                  in cart
                  <AddMinusBtn onClick={() => IncreaseCartQuantity(id)}>
                    +
                  </AddMinusBtn>
                </AddMinus>
                <RemoveBtn onClick={() => RemaoveFromCart(id)}>
                  Remove
                </RemoveBtn>
              </AddToCartActive>
            )}
          </AddToCart>
        </Left>

        <Right>
          {" "}
          <Image src={`images/${images}.jpg`} />
        </Right>
      </FirstSection>
      <SecondSection>
        <LeftScreen></LeftScreen>

        <RightScreen>
          <ImageSS src={`images/${images}.jpg`} />
        </RightScreen>
      </SecondSection>
    </Container>
  );
}

const Container = styled.section`
  padding: 40px 60px;
  background: linear-gradient(
      rgba(164, 177, 183, 0.6),
      rgba(255, 255, 255, 0)
    ),
    #ffffff;
    padding-bottom: 0;
    padding-right:0;
`;

const FirstSection = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  height: 60%;
  width: 400px;
`;

const Detail = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
`;

const Route = styled.div`
  margin-bottom: 40px;
  font-size: 15px;
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Color = styled.div`
  color: #b8b2b2;
`;

const View = styled.div`
  font-size: 22px;
  text-decoration: underline;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 20px;
  font-size: 20px;
`;

const AddToCart = styled.div`
  margin-top: 0;
`;

const AddToCartBtn = styled.button`
  width: 200px;
  padding: 11px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const AddToCartActive = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;
`;

const AddMinus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const RemoveBtn = styled.button`
  background-color: #db1f1f;
  padding: 6px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
const AddMinusBtn = styled.button`
  padding: 9px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: 3;
`;
const SecondSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;
const LeftScreen = styled.div`
  width: 55%;
`;

const RightScreen = styled.div`
  width: 45%;
  display: flex;
`;
const ImageSS = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
