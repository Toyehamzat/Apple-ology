import { Swiper, SwiperSlide } from "swiper/react";
import latests from "../../data/latest.json";
import { LatestItem } from "../../components/latestItem";
// import { useMediaQuery } from "react-responsive";
//@ts-ignore
import { FreeMode, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ContactSection } from "../../components/Contact/ContactSection";
import {
  Container,
  FirstSection,
  LeftScreen,
  Intro,
  Title,
  Button,
  SecondSection,
  Latest,
  Black,
  LatestContainer,
  ImageCon,
  Image,
} from "./styles";
export function Home() {
  return (
    <Container>
      <FirstSection>
        <video id="largevideo" autoPlay loop muted playsInline>
          <source src="images/large.mp4" type="video/mp4" />
        </video>

        <LeftScreen>
          <Intro>
            <Title>Apple-ology.</Title> The best way to buy the products you
            love.
          </Intro>
          <Button>Go Shopping</Button>
          <ImageCon>
            <Image src="images/whiteArrow.png" alt="arrow image" />
          </ImageCon>
        </LeftScreen>
      </FirstSection>
      <SecondSection>
        <Latest>
          <Black>The lastest.</Black>Take a look at what's new,right now.
        </Latest>
        <LatestContainer>
          <Swiper
            slidesPerView={3.3}
            spaceBetween={30}
            freeMode={true}
            onSlideChange={() => console.log("slide changed")}
            onSwiper={(swiper) => console.log(swiper)}
            mousewheel={true}
            modules={[FreeMode, Mousewheel]}
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
    </Container>
  );
}
