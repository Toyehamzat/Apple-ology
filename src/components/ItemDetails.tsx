type ItemDetailsProps = {
  id: number;
  name: string;
  price: number;
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
  pictureNoBg: string;
  quantity: number;
  key: number;
};
import { Arrow90degUp, Cart3, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CurrencyFormat } from "../utilities/currencyFormatter";
import { useShoppingCart } from "../context/shoppingCartContext";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ItemDetails({
  id,
  name,
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
  pictureNoBg,
}: ItemDetailsProps) {
  const {
    getItemQuantity,
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
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
                <RemoveBtn onClick={() => RemoveFromCart(id)}>Remove</RemoveBtn>
              </AddToCartActive>
            )}
          </AddToCart>
        </Left>
        <Right>
          <Image src={`${pictureNoBg}`} />
        </Right>
      </FirstSection>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <SecondSection ref={TargetDownRef}>
          <LeftScreen>
            <LeftScreenBody>
              <Title>Details</Title>
              <ProductInfo>Product Info</ProductInfo>
              <InfoContainer>
                <ManufactureDiv>
                  Manufacturer:
                  <span className="grey">
                    <span className="red">
                      ............................................................
                    </span>
                    {`${manufacture}`}
                  </span>
                </ManufactureDiv>
                <Model>
                  Model:
                  <span className="grey">
                    <span className="red">
                      ..............................................................................
                    </span>
                    {`${model}`}
                  </span>
                </Model>
                <Weight>
                  Weight:
                  <span className="grey">
                    <span className="red">
                      ...........................................................................
                    </span>
                    {`${weight} kg`}
                  </span>
                </Weight>
                <ColorDiv>
                  Color:
                  <span className="grey">
                    <span className="red">
                      .................................................................................
                    </span>
                    {`${color}`}
                  </span>
                </ColorDiv>
                <ScreenSizeDiv>
                  Screen Size:
                  <span className="grey">
                    <span className="red">
                      ..................................................................
                    </span>
                    {`${screenSize}-inch Display`}
                  </span>
                </ScreenSizeDiv>
                <SimType>
                  Sim Type:
                  <span className="grey">
                    <span className="red">
                      .......................................................................
                    </span>
                    {`${simType}`}
                  </span>
                </SimType>
                <RAM>
                  RAM:
                  <span className="grey">
                    <span className="red">
                      ..................................................................................
                    </span>
                    {`${ram}GB`}
                  </span>
                </RAM>
                <ROM>
                  ROM:
                  <span className="grey">
                    <span className="red">
                      .................................................................................
                    </span>
                    {`${rom}GB`}
                  </span>
                </ROM>
                <OS>
                  Operating system:
                  <span className="grey">
                    <span className="red">
                      ...................................................
                    </span>
                    {`${os}`}
                  </span>
                </OS>
                <RearCam>
                  Rear Camera Quality:
                  <span className="grey">
                    <span className="red">
                      ............................................
                    </span>
                    {`${rearCam}`}
                  </span>
                </RearCam>
                <FrontCam>
                  Front Camera Quality:
                  <span className="grey">
                    <span className="red">
                      ...........................................
                    </span>
                    {`${frontCam}MP`}
                  </span>
                </FrontCam>
                <Network>
                  5G Network:
                  <span className="grey">
                    <span className="red">
                      ..................................................................
                    </span>
                    {`${network}`}
                  </span>
                </Network>
                <BatteryCap>
                  Battery Capacity:
                  <span className="grey">
                    <span className="red">
                      ......................................................
                    </span>
                    {`Li-Ion ${batteryCap} mAh`}
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
            <ImageSS src={`${pictureNoBg}`} />
          </RightScreen>
        </SecondSection>
      </motion.div>
    </Container>
  );
}

const Container = styled.section`
  padding: 40px 60px;
  background-color: white;
  padding-bottom: 0;
  padding-right: 0;

  @media (max-width: 636px) {
    padding: 40px 50px;
    padding-bottom: 0;
    padding-right: 0;
  }

  @media (max-width: 496px) {
    padding: 30px 30px;
    padding-bottom: 0;
    padding-right: 0;
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FirstSection = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 770px) {
    height: 70vh;
  }
`;
const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 7%;
`;
const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  padding: 0;

  @media (max-width: 423px) {
    padding-top: 25px;
  }
`;
const Image = styled.img`
  object-fit: cover;

  @media (max-width: 770px) {
    width: 250px;
    height: 80%;
  }
  @media (max-width: 423px) {
    width: 230px;
    height: 65%;
    object-fit: cover;
  }
`;

const Detail = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
`;

const Route = styled.div`
  font-size: 15px;

  @media (max-width: 496px) {
    margin-bottom: 20px;
  }
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 636px) {
    font-size: 27px;
  }

  @media (max-width: 600px) {
    font-size: 25px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
  }
  @media (max-width: 423px) {
    font-size: 18px;
  }
`;

const Color = styled.div`
  color: rgb(101, 101, 101);
`;

const View = styled.div`
  font-size: 22px;
  text-decoration: underline;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 550px) {
    font-size: 19px;
  }
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
  padding: 11px;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 770px) {
    width: 100%;
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
  justify-content: space-between;
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
  @media (max-width: 770px) {
    justify-content: center;
  }
`;
const LeftScreen = styled.div`
  width: 50%;
  padding-top: 4%;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const RightScreen = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 770px) {
    width: 0;
    overflow: hidden;
    height: 0;
  }
`;
const ImageSS = styled.img`
  object-fit: cover;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

const LeftScreenBody = styled.div`
  justify-content: space-between;
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
  padding-top: 60px;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 770px) {
    padding-right: 20px;
    gap: 15px;
  }
`;
const BackBtn = styled.div`
  margin-top: 7%;
  cursor: pointer;
`;

const ManufactureDiv = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Model = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Weight = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ScreenSizeDiv = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const SimType = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const RAM = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ROM = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const OS = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const RearCam = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const FrontCam = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Network = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const BatteryCap = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ColorDiv = styled.div`
  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
