import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import latests from "../../data/latest.json";
import { LatestItem } from "../../components/latestItem";
import { Pagination, FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ContactSection } from "../../components/Contact/ContactSection";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <Container>
      <FirstSection>
        <video src="images\large.mp4" autoPlay loop muted></video>
        <LeftScreen>
          <Intro>
            <Title>Apple-ology.</Title>The best way to buy the products you
            love.
          </Intro>
          <Link to="/Products">
            <Button>Shop Now</Button>
          </Link>
        </LeftScreen>
      </FirstSection>
      <SecondSection>
        <Latest>
          <Black>The lastest.</Black>Take a look at what's new,right now.
        </Latest>
        <LatestContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            onSlideChange={() => console.log("slide changed")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, FreeMode, Navigation]}
          >
            {latests.map((latest, id) => (
              <SwiperSlide key={id}>
                <LatestItem {...latest} />
              </SwiperSlide>
            ))}
          </Swiper>
        </LatestContainer>
      </SecondSection>
      <ContactSection />
      <Footer />
    </Container>
  );
}

const Container = styled.section`
  padding: 0px 0px;
  height: auto;
`;

const FirstSection = styled.section`
  width: 100%;
  height: 100vh;
`;
const LeftScreen = styled.div`
  position: absolute;
  height: 100vh;
  top: 10%;
  width: 45%;
  height: 500px;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  padding-top: 100px;
  background: transparent;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  width: 180px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    background-color: #ececec;
    transform: scale(1.1);
  }
`;

const Title = styled.span`
  color: #000000;
  background: transparent;
`;

const Intro = styled.div`
  color: #ffffff;
  margin: auto;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  margin-bottom: 45px;
  background: transparent;
`;

const SecondSection = styled.section`
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(214, 225, 230, 0.7)
    ),
    #ffffff;
  padding: 60px 60px;
`;

const Latest = styled.label`
  color: #6b6b6b;
  font-size: 25px;
  font-weight: 600;
  background: transparent;
`;

const Black = styled.label`
  color: black;
  background: transparent;
`;

const LatestContainer = styled.div`
  background: inherit;
`;
