import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Section } from "../Style/UI";

import CarouselPortafolio from "../Components/CarouselPortafolio";

const Portafolio = () => {
  const widthRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const refSlider = () => {
      if (widthRef.current) {
        const refWidth = widthRef.current.offsetWidth;
        setSliderWidth(refWidth);
      }
    };
    refSlider();
    // También puedes escuchar cambios en el ancho del viewport para actualizar sliderWidth
    const handleResize = () => {
      if (widthRef.current) {
        const refWidth = widthRef.current.offsetWidth;
        setSliderWidth(refWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Section id="portafolio" colum="true" ref={widthRef}>
      <Title font="large">Algunos de nuestros trabajos</Title>
      <Container>
        <CarouselPortafolio slide={sliderWidth} />
      </Container>
    </Section>
  );
};

export default Portafolio;

const Title = styled.h1`
  text-align: center;
  width: 65%;
  margin: 0 auto;
  font-size: ${(props) =>
    props.font == "extra-large"
      ? props.theme.fontxxxl
      : props.font == "large"
      ? props.theme.fontxl
      : props.theme.fontmd};
  text-transform: uppercase;
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontlg};
    margin-bottom: 0px;
    margin-top: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 50px;
`;
