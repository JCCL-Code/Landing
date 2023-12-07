import React from "react";
import styled, { keyframes } from "styled-components";
import { Section, FlexBox, Decorador } from "../Style/UI";
import blanco from "../assets/blanco.png";

function Home() {
  return (
    <Section id="inicio" >
      <FlexBox width="2">
        <Decorador up="true" left="true" padding="1" color="orange" />
        <Decorador bottom="true" rigth="true" padding="2" color="yellow" />
        <Title>
          <img src={blanco} alt="" />
        </Title>
        <SubTitle>Inovacion tecnologica</SubTitle>
        <Parrafo>
          JCCL Code es una startup inspirada por la innovación y el desarrollo
          digital de alta calidad. Nuestro equipo está formado por profesionales
          creativos y comprometidos que comparten la visión de crear impacto a
          través de la transformación de ideas de nuestros clientes a código.
        </Parrafo>
      </FlexBox>
    </Section>
  );
}

export default Home;
const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Animación de aparición desde la izquierda
const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Animación de aparición desde abajo hacia arriba
const slideFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: uppercase;
  margin-top: 50px;
  animation: ${slideFromLeft} 1s ease forwards;
  @media (max-width: 64em) {
    margin-bottom: 20px;
    img{
      width: ${props=> props.theme.fontxxxl}
    }
  }
`;

const SubTitle = styled.div`
  text-align: center;
  width: 65%;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
  animation: ${slideFromRight} 1.5s ease forwards;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
    margin-bottom: 10px;
  }
`;

const Parrafo = styled.p`
  width: 60%;
  margin: 0 auto;
  margin-top: 35px;
  text-align: justify;
  text-justify: inter-word;
  word-spacing: 10px;
  line-height: 1.8rem;
  font-size: ${(props) => props.theme.fontlg};
  text-indent: 20px;
  animation: ${slideFromBottom} 2s ease forwards;
  @media (max-width: 64em) {
    width: 90%;
  }
`;
