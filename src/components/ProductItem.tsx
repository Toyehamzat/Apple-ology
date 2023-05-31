import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";
type ProductItemProps = {
  name: string;
  id: number;
  price: number;
  images: string;
};
export function ProductItem({ name, id, price, images }: ProductItemProps) {
  return (
    <>
      <Card>
        <Img src={`images/${images}.jpg`} />
        <Body>
          <Name>{name}</Name>
          <Price>{CurrencyFormat(price)}</Price>
        </Body>
      </Card>
    </>
  );
}

const Card = styled.div`

`;

const Img = styled.img`
  height: 280px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow:  2px 2px 2px rgba(0, 0, 0, 0.4);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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
