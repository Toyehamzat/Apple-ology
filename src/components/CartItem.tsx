type CartItemsProps = {
  id: number;
  quantity: number;
};
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import productarray from "../data/productarray.json";
import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";

export function CartItem({ id, quantity }: CartItemsProps) {
  const { RemoveFromCart, DecreaseCartQuantity, IncreaseCartQuantity } =
    useShoppingCart();
  const item = productarray.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal">
      <Body>
        <Image>
          <Img src={item.pictureNoBg} />
        </Image>

        <Details>
          <Name>{item.name}</Name>
          <Color>{item.color}</Color>
          <Price>{CurrencyFormat(item.price)}</Price>
          <ADDMINUSREMOVE>
            <RemoveBtn onClick={() => RemoveFromCart(id)}>Remove</RemoveBtn>
            <AddMinus>
              <AddMinusBtn onClick={() => DecreaseCartQuantity(id)}>
                -
              </AddMinusBtn>
              <Quantity className="fs-10">{`x${quantity}`} </Quantity>
              <AddMinusBtn onClick={() => IncreaseCartQuantity(id)}>
                +
              </AddMinusBtn>
            </AddMinus>
          </ADDMINUSREMOVE>
        </Details>
      </Body>
    </Stack>
  );
}
const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`;

const Img = styled.img`
  height: 200px;
  object-fit: cover;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

const Details = styled.div``;

const Name = styled.div`
  font-size: 20px;
  letter-spacing: 4px;
  font-weight: 500;
`;

const Color = styled.div`
  color: rgb(101, 101, 101);
`;

const ADDMINUSREMOVE = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
`;

const Price = styled.div``;

const Quantity = styled.div``;

const RemoveBtn = styled.button`
  background-color: #db1f1f;
  padding: 3px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
const AddMinus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const AddMinusBtn = styled.button`
  padding: 3px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
