import React from "react";
import styled from "styled-components";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

export const Carousel = () => {
  return (
    <Container>
      <Swiper
        // install Swiper modules
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCards,
          Autoplay,
        ]}
        navigation={true}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        effect={"cards"}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
};

/* Hacer una Card! */

const Container = styled.div`
  width: 25vw;
  height: 70vh;
  margin: 0 auto;
  
  @media (max-width: 70em) {
    height: 60vh;
    margin: 0 auto;
  }
  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
    margin: 0 auto;
  }
  @media (max-width: 48em) {
    height: 45vh;
    width: 60vw;
    margin: 0 auto;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
  }
`;
