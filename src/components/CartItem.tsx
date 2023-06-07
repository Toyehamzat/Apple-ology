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
        <Img
          //@ts-ignore
          src={item.pictureNoBg}
        />
      </Image>

      <Details>
        <Name
        //@ts-ignore
        >{item.name}
        </Name>

        <Color
        //@ts-ignore
        >{item.color}
        </Color>

        <Price>
          {CurrencyFormat(
            //@ts-ignore
            item.price
          )}
        </Price>
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

  @media (max-width: 770px) {
    width: 100px;
  }
  @media (max-width: 376px) {
    width: 120px;
  }
`;

const Img = styled.img`
  height: 200px;
  object-fit: cover;

  @media (max-width: 770px) {
    height: 150px;
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding-right: 10px;

  @media (max-width: 770px) {
    gap: 25px;
    margin-bottom: 10px;
  }
`;

const Details = styled.div``;

const Name = styled.div`
  font-size: 20px;
  letter-spacing: 4px;
  font-weight: 500;

  @media (max-width: 770px) {
    font-size: 17px;
  }

  @media (max-width: 376px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

const Color = styled.div`
  color: rgb(101, 101, 101);
`;

const ADDMINUSREMOVE = styled.div`
  width: 200px;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 400px) {
    width: 180px;
  }

  @media (max-width: 376px) {
    width: 170px;
  }

  @media (max-width: 376px) {
    width: 155px;
  }

  @media (max-width: 360px) {
    width: 140px;
  }
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
