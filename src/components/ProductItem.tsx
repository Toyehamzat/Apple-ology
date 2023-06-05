import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
type ProductItemProps = {
  name: string;
  id: number;
  price: number;
  images: string;
  pictureNoBg:string;


};
export function ProductItem({ name, id, price,pictureNoBg }: ProductItemProps) {
  const {
    getItemQuantity,
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Link id="link" to={`/Products${id}`}>
        <Img src={`${pictureNoBg}`} />
      </Link>
      <Body>
        <NamePrice>
          <Name>{name}</Name>
          <Price>{CurrencyFormat(price)}</Price>
        </NamePrice>
        <AddToCart>
          {quantity === 0 ? (
            <AddToCartBtn onClick={() => IncreaseCartQuantity(id)}>
              + Add to cart
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
              <RemoveBtn onClick={() => RemoveFromCart(id)}>Remove</RemoveBtn>
            </AddToCartActive>
          )}
        </AddToCart>
      </Body>
    </Card>
  );
}

const Card = styled.div`
  height: 100%;
`;

const Img = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Name = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 500;
`;

const Price = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #404040;
`;

const NamePrice = styled.div`
  margin-bottom: 5px;
`;

const AddToCart = styled.div`
  margin-top: auto;
`;

const AddToCartBtn = styled.button`
  width: 100%;
  padding: 7px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddToCartActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: 4px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
const AddMinusBtn = styled.button`
  padding: 7px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: 3;
`;
