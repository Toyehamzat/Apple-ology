import { Swiper, SwiperSlide } from "swiper/react";
import latests from "../../data/latest.json";
import { LatestItem } from "../../components/latestItem";

//@ts-ignore
import { Pagination, FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ContactSection } from "../../components/Contact/ContactSection";
import { Footer } from "../../components/footer/footer";
import { Link } from "react-router-dom";
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
} from "./styles";
export function Home() {

  return (
    <Container>
      <FirstSection>
        <video src="images/large.mp4"autoPlay loop muted></video>
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
            slidesPerView={2.8}
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
