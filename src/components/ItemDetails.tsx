type ItemDetailsProps = {
  id: number;
  name: string;
  price: number;
  images: string;
  color: string;
  manufacture: string;
  model: string;
  screenSize: number;
  simType: string;
  os: string;
  ram: number;
  rom: number;
  rearCam: string;
  frontCam: number;
  network: string;
  weight: number;
  batteryCap: number;
};
import {
  Arrow90degUp,
  Back,
  Cart3,
  ChevronBarLeft,
  ChevronRight,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";
import { useShoppingCart } from "../context/shoppingCartContext";
import { useRef } from "react";

export default function ItemDetails({
  id,
  name,
  images,
  price,
  color,
  manufacture,
  model,
  screenSize,
  simType,
  ram,
  rom,
  os,
  rearCam,
  frontCam,
  network,
  weight,
  batteryCap,
}: ItemDetailsProps) {
  const {
    getItemQuantity,
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemaoveFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const TargetDownRef = useRef<HTMLDivElement>(null);
  const TargetUpRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={TargetUpRef}>
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
            <View
              onClick={() =>
                TargetDownRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View all Details
            </View>
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
          <Image src={`images/${images}.jpg`} />
        </Right>
      </FirstSection>
      <SecondSection ref={TargetDownRef}>
        <LeftScreen>
          <LeftScreenBody>
            <Title>Details</Title>
            <ProductInfo>Product Info</ProductInfo>
            <InfoContainer>
              <ManufactureDiv>
                Manufacturer:
                <span className="grey">
                  .........................................................................
                  {manufacture}
                </span>
              </ManufactureDiv>
              <Model>
                Model:
                <span className="grey">
                  ...........................................................................................
                  {model}
                </span>
              </Model>
              <Weight>
                Weight:
                <span className="grey">
                  .........................................................................................
                  {`${weight} kg`}
                </span>
              </Weight>
              <ColorDiv>
                Color:
                <span className="grey">
                  ..............................................................................................
                  {color}
                </span>
              </ColorDiv>
              <ScreenSizeDiv>
                Screen Size:
                <span className="grey">
                  ................................................................................
                  {`${screenSize}-inch Display`}
                </span>
              </ScreenSizeDiv>
              <SimType>
                Sim Type:
                <span className="grey">
                  .....................................................................................
                  {simType}
                </span>
              </SimType>
              <RAM>
                RAM:
                <span className="grey">
                  ................................................................................................
                  {`${ram}GB`}
                </span>
              </RAM>
              <ROM>
                ROM:
                <span className="grey">
                  ................................................................................................
                  {`${rom}GB`}
                </span>
              </ROM>
              <OS>
                Operating system:
                <span className="grey">
                  ..................................................................
                  {os}
                </span>
              </OS>
              <RearCam>
                Rear Camera Quality:
                <span className="grey">
                  ...........................................................
                  {rearCam}
                </span>
              </RearCam>
              <FrontCam>
                Front Camera Quality:
                <span className="grey">
                  ..........................................................
                  {`${frontCam}MP`}
                </span>
              </FrontCam>
              <Network>
                5G Network:
                <span className="grey">
                  .................................................................................
                  {network}
                </span>
              </Network>
              <BatteryCap>
                Battery Capacity:
                <span className="grey">
                  ......................................................................
                  {`Li-Ion ${batteryCap} mAh, non-removable`}
                </span>
              </BatteryCap>
            </InfoContainer>
          </LeftScreenBody>
          <BackBtn
            onClick={() =>
              TargetUpRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Arrow90degUp size={11} />
            Up
          </BackBtn>
        </LeftScreen>
        <RightScreen>
          <ImageSS src={`images/${images}.jpg`} />
        </RightScreen>
      </SecondSection>
    </Container>
  );
}

const Container = styled.section`
  padding: 40px 60px;
  background: linear-gradient(rgba(164, 177, 183, 0.6), rgba(255, 255, 255, 0)),
    #ffffff;
  padding-bottom: 0;
  padding-right: 0;
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
  height: 75%;
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
  color: rgb(101, 101, 101);
`;

const View = styled.div`
  font-size: 22px;
  text-decoration: underline;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(0.97);
  }
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
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
  padding-left: 20px;
  padding-top: 4%;
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

const LeftScreenBody = styled.div`
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 22px;
  font-weight: 600;
`;

const ProductInfo = styled.div`
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
`;
const BackBtn = styled.div`
  margin-top: 7%;
`;

const ManufactureDiv = styled.div``;
const Model = styled.div``;
const Weight = styled.div``;
const ScreenSizeDiv = styled.div``;
const SimType = styled.div``;
const RAM = styled.div``;
const ROM = styled.div``;
const OS = styled.div``;
const RearCam = styled.div``;
const FrontCam = styled.div``;
const Network = styled.div``;
const BatteryCap = styled.div``;
const ColorDiv = styled.div``;
