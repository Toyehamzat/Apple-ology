import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
// import { Heart } from "react-bootstrap-icons";
type ProductItemProps = {
  name: string;
  id: number;
  price: number;
  pictureNoBg: string;
};
export function ProductItem({
  name,
  id,
  price,
  pictureNoBg,
}: ProductItemProps) {
  const { getItemQuantity, IncreaseCartQuantity, DecreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <ImgContainer>
        <Link id="link" to={`/Products${id}`}>
          <Img src={`${pictureNoBg}`} />{" "}
        </Link>
        {/* <Heart size={27}  onClick={() => IncreaseLikeItems(id)}  /> */}
      </ImgContainer>

      <Body>
        <NamePrice>
          <Name>{name}</Name>
          <Price>{CurrencyFormat(price)}</Price>
        </NamePrice>
        <AddToCart>
          {quantity === 0 ? (
            <>
              <AddToCartBtn onClick={() => IncreaseCartQuantity(id)}>
                + Add to cart
              </AddToCartBtn>
            </>
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

const ImgContainer = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: 280px;
  width: 90%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  @media (max-width: 496px) {
    height: 200px;
    width: 100%;
  }
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
  @media (max-width: 496px) {
    font-size: 15px;
    letter-spacing: 1px;
  }

  @media (max-width: 415px) {
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const Price = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 600;
  color: #404040;

  @media (max-width: 496px) {
    font-size: 14px;
    letter-spacing: 2px;
  }

  @media (max-width: 415px) {
    font-size: 12px;
    letter-spacing: 2px;
  }
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
  @media (max-width: 496px) {
    padding: 6px;
  }

  @media (max-width: 415px) {
    padding: 5px;
  }
`;

const AddToCartActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 496px) {
    gap: 0;
  }
`;

const AddMinus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const AddMinusBtn = styled.button`
  padding: 7px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 496px) {
    padding: 6px;
  }

  @media (max-width: 415px) {
    padding: 5px;
  }
`;

const Quantity = styled.span`
  font-size: 3;
`;
